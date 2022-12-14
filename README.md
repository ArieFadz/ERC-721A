<!--
[![Docs][docs-shield]][docs-url]
[![NPM][npm-shield]][npm-url]
[![CI][ci-shield]][ci-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Coverage][coverage-shield]][coverage-url]
 OTHER BADGES -->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->

<!-- ANNOUNCEMENT -->

<!--

> **📢 Version 4.x introduces several breaking changes. [Please refer to the documentation for more details.](https://chiru-labs.github.io/ERC721A/#/migration)**

_We highly recommend reading the migration guide_, **especially** _the part on [`supportsInterface`](https://chiru-labs.github.io/ERC721A/#/migration?id=supportsinterface) if you are using with OpenZeppelin extensions_ (e.g. ERC2981).

-->

<!-- ABOUT THE PROJECT -->

## About The Project : NFTCollectible

For learning purpose..!

&nbsp;

## Error

    Compiled 15 Solidity files successfully

    Deploying...
    
    Error: types/values length mismatch (count={"types":4,"values":0}, value={"types":[{"name":"maxBatchSize_","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"collectionSize_","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"amountForAuctionAndDev_","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true},{"name":"amountForDevs_","type":"uint256","indexed":null,"components":null,"arrayLength":null,"arrayChildren":null,"baseType":"uint256","_isParamType":true}],"values":[]}, code=INVALID_ARGUMENT, version=abi/5.7.0)
    at Logger.makeError (C:\Users\ARIE\ERC721A\node_modules\@ethersproject\logger\src.ts\index.ts:269:28)
    at Logger.throwError (C:\Users\ARIE\ERC721A\node_modules\@ethersproject\logger\src.ts\index.ts:281:20)
    at AbiCoder.encode (C:\Users\ARIE\ERC721A\node_modules\@ethersproject\abi\src.ts\abi-coder.ts:101:20)
    at Interface._encodeParams (C:\Users\ARIE\ERC721A\node_modules\@ethersproject\abi\src.ts\interface.ts:323:31)
    at Interface.encodeDeploy (C:\Users\ARIE\ERC721A\node_modules\@ethersproject\abi\src.ts\interface.ts:327:21)
    at getDeployData (C:\Users\ARIE\ERC721A\node_modules\@openzeppelin\hardhat-upgrades\src\utils\deploy-impl.ts:49:45)
    at deployProxyImpl (C:\Users\ARIE\ERC721A\node_modules\@openzeppelin\hardhat-upgrades\src\utils\deploy-impl.ts:72:22)
    at Proxy.deployProxy (C:\Users\ARIE\ERC721A\node_modules\@openzeppelin\hardhat-upgrades\src\deploy-proxy.ts:35:28)
    at main (C:\Users\ARIE\ERC721A\scripts\deploy.js:9:19) {
    reason: 'types/values length mismatch',
    code: 'INVALID_ARGUMENT',
    count: { types: 4, values: 0 },
    value: {
    types: [ [ParamType], [ParamType], [ParamType], [ParamType] ],
    values: []
      }
    }

&nbsp;

<!-- 
The goal of ERC721A is to provide a fully compliant implementation of IERC721 with significant gas savings for minting multiple NFTs in a single transaction. This project and implementation will be updated regularly and will continue to stay up to date with best practices.

The [Azuki](https://twitter.com/AzukiOfficial) team created ERC721A for its sale on 1/12/22. There was significant demand for 8700 tokens made available to the public, and all were minted within minutes. The network BASEFEE remained low despite huge demand, resulting in low gas costs for minters, while minimizing network disruption for the wider ecosystem as well.

![Gas Savings](https://pbs.twimg.com/media/FIdILKpVQAEQ_5U?format=jpg&name=medium)

For more information on how ERC721A works under the hood, please visit our [blog](https://www.azuki.com/erc721a). To find other projects that are using ERC721A, please visit [erc721a.org](https://www.erc721a.org) and our [curated projects list](https://github.com/chiru-labs/ERC721A/blob/main/projects.md).

**Chiru Labs is not liable for any outcomes as a result of using ERC721A.** DYOR.
 -->

<!-- Docs -->

## Docs

&nbsp;

<!--
    https://chiru-labs.github.io/ERC721A/

 Upgradeable Version 

## Upgradeable Version

https://github.com/chiru-labs/ERC721A-Upgradeable  -->

<!-- Installation

## Installation

```sh

npm install --save-dev erc721a

``` -->

<!-- USAGE EXAMPLES

## Usage

Once installed, you can use the contracts in the library by importing them:

```solidity
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";

contract Azuki is ERC721A {
    constructor() ERC721A("Azuki", "AZUKI") {}

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        _mint(msg.sender, quantity);
    }
}

``` -->

<!-- ROADMAP -->

<!--

## Roadmap

- [ ] Improve general repo and code quality (workflows, comments, etc.)
- [ ] Add more documentation on benefits of using ERC721A
- [ ] Maintain full test coverage

See the [open issues](https://github.com/chiru-labs/ERC721A/issues) for a full list of proposed features (and known issues).

-->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.

<!-- Don't forget to give the project a star! --> Thanks!

<!-- ROADMAP

### Running tests locally

1. `npm install`
2. `npm run test` -->

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

<!--
## Contact

- 2pm.flow (owner) - [@2pmflow](https://twitter.com/2pmflow)
- location tba (owner) - [@locationtba](https://twitter.com/locationtba)
- cygaar (maintainer) - [@cygaar_dev](https://twitter.com/cygaar_dev)
- vectorized.eth (maintainer) - [@optimizoor](https://twitter.com/optimizoor)

-->

<!-- Project Link: [https://github.com/chiru-labs/ERC721A](https://github.com/chiru-labs/ERC721A) -->

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links

[docs-shield]: https://img.shields.io/badge/docs-%F0%9F%93%84-blue?style=for-the-badge
[docs-url]: https://chiru-labs.github.io/ERC721A/
[npm-shield]: https://img.shields.io/npm/v/erc721a.svg?style=for-the-badge
[npm-url]: https://www.npmjs.com/package/erc721a
[ci-shield]: https://img.shields.io/github/workflow/status/chiru-labs/ERC721A/ERC721A%20CI?label=build&style=for-the-badge
[ci-url]: https://github.com/ArieFadz/ERC-721A/actions/workflows/run_tests.yml
[ci-url]: https://github.com/chiru-labs/ERC721A/actions/workflows/run_tests.yml
[contributors-shield]: https://img.shields.io/github/contributors/chiru-labs/ERC721A.svg?style=for-the-badge
[contributors-url]: https://github.com/chiru-labs/ERC721A/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chiru-labs/ERC721A.svg?style=for-the-badge
[forks-url]: https://github.com/chiru-labs/ERC721A/network/members
[stars-shield]: https://img.shields.io/github/stars/chiru-labs/ERC721A.svg?style=for-the-badge
[stars-url]: https://github.com/chiru-labs/ERC721A/stargazers
[issues-shield]: https://img.shields.io/github/issues/chiru-labs/ERC721A.svg?style=for-the-badge
[issues-url]: https://github.com/chiru-labs/ERC721A/issues
[license-shield]: https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge
[license-url]: https://github.com/chiru-labs/ERC721A/blob/main/LICENSE.txt
[coverage-shield]: https://img.shields.io/codecov/c/gh/chiru-labs/ERC721A?style=for-the-badge
[coverage-url]: https://codecov.io/gh/chiru-labs/ERC721A
[product-screenshot]: images/screenshot.png
 -->
