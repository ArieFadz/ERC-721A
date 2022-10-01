// scripts/deploy.js

const { ethers, upgrades } = require('hardhat');
const fs = require('fs');

async function main() {
    const NFTCollectible = await ethers.getContractFactory('NFTCollectible');
    console.log('Deploying contract...');
    const nftcollectible = await upgrades.deployProxy(
        NFTCollectible, 
        [], 
        { initializer: 'initialize' }
    );
    await nftcollectible.deployed();
    const addresses = {
        proxy: nftcollectible.address,
        admin: await upgrades.erc1967.getAdminAddress(nftcollectible.address), 
        implementation: await upgrades.erc1967.getImplementationAddress(nftcollectible.address)
    };
    console.log('Contract deployed to address:', addresses);

    try { 
        await run('verify', { address: addresses.implementation });
    } catch (e) {
        console.log(e.message);
    }

    fs.writeFileSync('deployment-addresses.json', JSON.stringify(addresses));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
