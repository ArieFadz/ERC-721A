//  https://chiru-labs.github.io/ERC721A/#/upgradeable?id=deployment
//  scripts/deploy.js
const { ethers, upgrades } = require('hardhat');
const fs = require('fs');

async function main () {
    const NFTCollectible = await ethers.getContractFactory('NFTCollectible');
    console.log('Deploying...');
    const nftcollectible = await upgrades.deployProxy(
        NFTCollectible, 
        [], 
        { initializer: 'initialize' }
    );
    await nftcollectible.deployed();
    const addresses = {
        proxy: nftcollectible.address,
        admin: await upgrades.erc1967.getAdminAddress(nftcollectible.address), 
        implementation: await upgrades.erc1967.getImplementationAddress(
            nftcollectible.address)
    };
    console.log('Addresses:', addresses);

    try { 
        await run('verify', { address: addresses.implementation });
    } catch (e) {}

    fs.writeFileSync('deployment-addresses.json', JSON.stringify(addresses));
}

main();
