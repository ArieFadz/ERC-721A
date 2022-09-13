//  https://chiru-labs.github.io/ERC721A/#/upgradeable?id=deployment
// scripts/deploy.js
const { ethers, upgrades } = require('hardhat');
const fs = require('fs');

async function main () {
    const MyNft = await ethers.getContractFactory('MyNft');
    console.log('Deploying...');
    const mynft = await upgrades.deployProxy(
        MyNft, 
        [], 
        { initializer: 'initialize' }
    );
    await mynft.deployed();
    const addresses = {
        proxy: mynft.address,
        admin: await upgrades.erc1967.getAdminAddress(mynft.address), 
        implementation: await upgrades.erc1967.getImplementationAddress(
            mynft.address)
    };
    console.log('Addresses:', addresses);
    //console.log('Addresses: ${result.addresses}')

    try { 
        await run('verify', { address: addresses.implementation });
    } catch (e) {}
    //} catch (e) {
    //    console.log(e.message)
    //}

    fs.writeFileSync('deployment-addresses.json', JSON.stringify(addresses));
}

main();
