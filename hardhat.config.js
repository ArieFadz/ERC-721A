/**
 * // https://chiru-labs.github.io/ERC721A/#/upgradeable?id=local
 * // Local
 * // hardhat.config.js
 * require("@nomiclabs/hardhat-waffle");
 * require('@openzeppelin/hardhat-upgrades');
 * 
 * module.exports = {
 *  solidity: "0.8.11"
 *  };
 */

// Testnet / Mainnet
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
    solidity: "0.8.11",
    networks: {
        goerli: {
            url: process.env.RPC_URL_GOERLI,
            accounts: [process.env.PRIVATE_KEY]
        }
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: process.env.ETHERSCAN_KEY
    }
};