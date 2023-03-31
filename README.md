# @sbinft/contracts
Open source contracts by SBINFT

# Installation

```
yarn add @sbinft/contracts
```

# Usage
## [contracts](https://github.com/gobase/sbinft-contracts/tree/master/contracts)

```solidity
pragma solidity ^0.8.0;

import "@sbinft/contracts/upgradeable/access/AdminUpgradeable.sol";

contract Mock is AdminUpgradeable {}
```

you can use the functions in the imported contracts.

```solidity
contract Mock is AdminUpgradeable {
    function myFunction() public {
        // some code...

        addAdmin([address1,address2]) // <- `addAdmin` is defined in AdminUpgradeable.sol

        // ...some code
    }
}
```

## [abi](https://github.com/gobase/sbinft-contracts/tree/master/abi/)

you import abi from `@sbinft/contracts/abi` directory.

``` javascipt
import { abi } = "@sbinft/contracts/abi/sbinft/market/v1/exchange/Exchange.sol/Exchange.json";

console.log(abi);
```

# [constants](https://github.com/gobase/sbinft-contracts/tree/master/constant)
## 1.GATEWAY_V1

This struct contains <code>SBINFTForwarder</code> and <code>SBINFT MultiCall</code> contract's info.

| contract name | version | network | proxy | implementation |
| ------------- | ------- | ------- | ----- | -------------- |
| SBINFTForwarder | 1.0 | goerli| [0x1E5BA945b166D72B3B87f6003BB8E8e2b6A7cEe6](https://goerli.etherscan.io/address/0x1E5BA945b166D72B3B87f6003BB8E8e2b6A7cEe6) | [0xFF408efF3894786B2e25D208b553669B13DA998E](https://goerli.etherscan.io/address/0xFF408efF3894786B2e25D208b553669B13DA998E) |
| SBINFTForwarder | 1.0 | mumbai | [0xf33341Af610F70CF3847C9683c5c5A4b0207443a](https://mumbai.polygonscan.com/address/0xf33341Af610F70CF3847C9683c5c5A4b0207443a)| [0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22](https://mumbai.polygonscan.com/address/0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22) |
| SBINFTForwarder | 1.0 | polygon | [0x944d1a6FC282f5F79054e17B829c59fbC50bE348](https://polygonscan.com/address/0x944d1a6FC282f5F79054e17B829c59fbC50bE348)| [0x3cC65ae5ae673912E90A39f03d24b40955012847](https://polygonscan.com/address/0x3cC65ae5ae673912E90A39f03d24b40955012847) |
| SBINFTForwarder | 1.0 | mainnet | [0xCcB6a41b93A6C326A91652CA816bE6A9fAeAC1B9](https://etherscan.io/address/0xCcB6a41b93A6C326A91652CA816bE6A9fAeAC1B9) | [0x2564C8Ac021Fa8cddf83C5e9e63A8edaf37c907d](https://etherscan.io/address/0x2564C8Ac021Fa8cddf83C5e9e63A8edaf37c907d) |
| SBINFT MultiCall | 1.0 | goerli | [0xF02d5E61818dE883BF0dB12Cc63043fCB9B950ba](https://goerli.etherscan.io/address/0xF02d5E61818dE883BF0dB12Cc63043fCB9B950ba) | [0x0b803bfcC5200D6860C49f59113042dac4ed2444](https://goerli.etherscan.io/address/0x0b803bfcC5200D6860C49f59113042dac4ed2444) |
| SBINFT MultiCall | 1.0 | mumbai | [0x9A544B6505e1a67A3CFF4e161Fc2998e2e15dc4d](https://mumbai.polygonscan.com/address/0x9A544B6505e1a67A3CFF4e161Fc2998e2e15dc4d) | [0x5CE6D38A000C96F1C9a54df66704080efaee5DBd](https://mumbai.polygonscan.com/address/0x5CE6D38A000C96F1C9a54df66704080efaee5DBd) |

### `FORWARD_REQUEST_TYPE`

| ForwardedRequest | name | type |
| ---------------- | ---- | ---- |
|| `from` | `address` |
|| `to` | `address` |
|| `values` | `uint256` |
|| `gas` | `uint256` |
|| `nonce` | `uint256` |
|| `data` | `bytes` |

### `CALL_INFO_TYPE`

| property | name | type |
| ---- | ---- | ---- |
| `Call` | `target` | `address` |
|| `callData` | `bytes` |
|| `value` | `uint256` |
| `CallInfo` | `callList` | `Call[]` |
## 2.MARKET_V1

This struct contains `SBINFTForwarder` and `SBINFTMultiCall` , `Exchange` , `RoyaltyRegistry` , `TransferProxy` , `PlatformRegistry` contract's info.

| contract name | version | network | proxy | implementation |
| ------------- | ------- | ------- | ----- | -------------- |
| SBINFTForwarder | 1.0 | goerli | [0x1E5BA945b166D72B3B87f6003BB8E8e2b6A7cEe6](https://goerli.etherscan.io/address/0x1E5BA945b166D72B3B87f6003BB8E8e2b6A7cEe6) | [0xFF408efF3894786B2e25D208b553669B13DA998E](https://goerli.etherscan.io/address/0xFF408efF3894786B2e25D208b553669B13DA998E) |
||| mumbai | [0xf33341Af610F70CF3847C9683c5c5A4b0207443a](https://mumbai.polygonscan.com/address/0xf33341Af610F70CF3847C9683c5c5A4b0207443a) | [0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22](https://mumbai.polygonscan.com/address/0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22) | 
||| polygon | [0x944d1a6FC282f5F79054e17B829c59fbC50bE348](https://polygonscan.com/address/0x944d1a6FC282f5F79054e17B829c59fbC50bE348) | [0x3cC65ae5ae673912E90A39f03d24b40955012847](https://polygonscan.com/address/0x3cC65ae5ae673912E90A39f03d24b40955012847) | 
||| mainnet | [0xCcB6a41b93A6C326A91652CA816bE6A9fAeAC1B9](https://etherscan.io/address/0xCcB6a41b93A6C326A91652CA816bE6A9fAeAC1B9) | [0x2564C8Ac021Fa8cddf83C5e9e63A8edaf37c907d](https://etherscan.io/address/0x2564C8Ac021Fa8cddf83C5e9e63A8edaf37c907d) | 
| SBINFTMultiCall | 1.0　| goerli | [0x687dea2daebD8f61BfbAfC9d975523933F3a4700](https://goerli.etherscan.io/address/0x687dea2daebD8f61BfbAfC9d975523933F3a4700) | [0x2D439911b02DfD86A2f4e1720baF3e83E7091301](https://goerli.etherscan.io/address/0x2D439911b02DfD86A2f4e1720baF3e83E7091301) | 
||| mumbai | [0xE57692B005B6Fb690a29b402459835a9bA080784](https://mumbai.polygonscan.com/address/0xE57692B005B6Fb690a29b402459835a9bA080784) | [0x6E74A38c30B68A94Ff62C065F65F287eefEAd7B6](https://mumbai.polygonscan.com/address/0x6E74A38c30B68A94Ff62C065F65F287eefEAd7B6) | 
| Exchange | 1.0 | goerli | [0x82F1bEfE4B33a0638227D5af8990798c11eE54D6](https://goerli.etherscan.io/address/0x82F1bEfE4B33a0638227D5af8990798c11eE54D6) | [0x9D16Fd013bDf9d224485722f77A44fD4c92685C1](https://goerli.etherscan.io/address/0x9D16Fd013bDf9d224485722f77A44fD4c92685C1) | 
||| mumbai | [0x698ef268F3525cDAA2e2143c0BE732bE02D45A4a](https://mumbai.polygonscan.com/address/0x698ef268F3525cDAA2e2143c0BE732bE02D45A4a) | [0x5e4217040cdc17cbaA1329B405F8c2ff40e40D88](https://mumbai.polygonscan.com/address/0x5e4217040cdc17cbaA1329B405F8c2ff40e40D88) | 
||| polygon | [0x08d12249846A786813F9B34c04e021c2060cFB62](https://polygonscan.com/address/0x08d12249846A786813F9B34c04e021c2060cFB62) | [0xB9A83eb825bBeF7336e852C73A27E41F05503d65](https://polygonscan.com/address/0xB9A83eb825bBeF7336e852C73A27E41F05503d65) | 
||| mainnet | [0xBcBC9b9Fc75E8E32c5b8baFd9ed7f653378A7809](https://etherscan.io/address/0xBcBC9b9Fc75E8E32c5b8baFd9ed7f653378A7809) | [0x64f1DB9e431c13a6811B61AE7E3cEc266b766ff1](https://etherscan.io/address/0x64f1DB9e431c13a6811B61AE7E3cEc266b766ff1) |
| RoyaltyRegistry | 1.0 | goerli | [0xB9693dCb846B1dBd2BEd4A2AA8Ee67aC1F4e2135](https://goerli.etherscan.io/address/0xB9693dCb846B1dBd2BEd4A2AA8Ee67aC1F4e2135) | [0x0Ec6d1B228411703B4137c2E4e9EF287596B3A26](https://goerli.etherscan.io/address/0x0Ec6d1B228411703B4137c2E4e9EF287596B3A26) | 
||| mumbai | [0x698ef268F3525cDAA2e2143c0BE732bE02D45A4a](https://mumbai.polygonscan.com/address/0x698ef268F3525cDAA2e2143c0BE732bE02D45A4a) | [0xeA608dEf0a4bbA902caD9Fb0364e67Bead20e302](https://mumbai.polygonscan.com/address/0xeA608dEf0a4bbA902caD9Fb0364e67Bead20e302) | 
||| polygon | [0xe9fa6B27B8645DbA1313A7b7dA4276247DeBC9Aa](https://polygonscan.com/address/0xe9fa6B27B8645DbA1313A7b7dA4276247DeBC9Aa) | [0x95fB25701C5540239A39edC1B03316F67c44A3F7](https://polygonscan.com/address/0x95fB25701C5540239A39edC1B03316F67c44A3F7) | 
||| mainnet | [0x568c76da3427E234Fd9Da49444A16296Fa1f7184](https://etherscan.io/address/0x568c76da3427E234Fd9Da49444A16296Fa1f7184) | [0x164b686350203888A8058c7c883dA1e1b047d145](https://etherscan.io/address/0x164b686350203888A8058c7c883dA1e1b047d145) |
| TransferProxy | 1.0 | goerli | [0xf21a39443F02318F8dd55fcD1f28822886c04e6a](https://goerli.etherscan.io/address/0xf21a39443F02318F8dd55fcD1f28822886c04e6a) | [0x1dDebc783BeB44764dEe2bb16Ca17392655B1B3C](https://goerli.etherscan.io/address/0x1dDebc783BeB44764dEe2bb16Ca17392655B1B3C) | 
||| mumbai | [0x159bE038c1110313b030FE8a3f703AaBF0c3010e](https://mumbai.polygonscan.com/address/0x159bE038c1110313b030FE8a3f703AaBF0c3010e) | [0x2b3A6551458852414d6B3B4467Ad1948b6f43600](https://mumbai.polygonscan.com/address/0x2b3A6551458852414d6B3B4467Ad1948b6f43600) | 
||| polygon | [0x594cA98aa711dd134315Cef388eDb4522b984747](https://polygonscan.com/address/0x594cA98aa711dd134315Cef388eDb4522b984747) | [0x2AD721a320A8AA41b6C2f5781f92fcd89dc44ee6](https://polygonscan.com/address/0x2AD721a320A8AA41b6C2f5781f92fcd89dc44ee6) | 
||| mainnet | [0xa6B8f8C34E86424674FAf648123e767Ac5b5C7DD](https://etherscan.io/address/0xa6B8f8C34E86424674FAf648123e767Ac5b5C7DD) | [0x6f743075eB0511582e783Fa8f5a23942804f6417](https://etherscan.io/address/0x6f743075eB0511582e783Fa8f5a23942804f6417) |
| PlatformRegistry | 1.0 | goerli | [0xA284CD5d0eE8FEEcBeC7558144200df434b7D99f](https://goerli.etherscan.io/address/0xA284CD5d0eE8FEEcBeC7558144200df434b7D99f) | [0x5e5AC07Af8Fac3f7c42BAA506D7CcB194bAD4cE0](https://goerli.etherscan.io/address/0x5e5AC07Af8Fac3f7c42BAA506D7CcB194bAD4cE0) | 
||| mumbai | [0x3630a8ffC70012850B9350D3f32Ac9331cD03b30](https://mumbai.polygonscan.com/address/0x3630a8ffC70012850B9350D3f32Ac9331cD03b30) | [0x82656aeeEcb04820aFac5C2f0b7d7a33E00A53Ee](https://mumbai.polygonscan.com/address/0x82656aeeEcb04820aFac5C2f0b7d7a33E00A53Ee) | 
||| polygon | [0xCdC45Ee96881326283eB2F2A768C1A9C6FafC402](https://polygonscan.com/address/0xCdC45Ee96881326283eB2F2A768C1A9C6FafC402) | [0xE392A876229b420B30b2e0c399C8427A09014f2a](https://polygonscan.com/address/0xE392A876229b420B30b2e0c399C8427A09014f2a) | 
||| mainnet | [0xd613B3749A969B6D1Fc0b182E2dAE8d30901375C](https://etherscan.io/address/0xd613B3749A969B6D1Fc0b182E2dAE8d30901375C) | [0x6f743075eB0511582e783Fa8f5a23942804f6417](https://etherscan.io/address/0x6f743075eB0511582e783Fa8f5a23942804f6417) |

### `EXCHANGE_SALE_ORDER_TYPE`

| property | name | type |
| -------- | ---- | ---- |
| `Asset` | `originKind` | `bytes4` |
|| `token` | `address` |
|| `tokenId` | `uint256` |
|| `partnerFeeRate` | `uint16` |
|| `isSecondarySale` | `uint8` | 
| `Payment` | `paymentMode` | `bytes4` |
|| `paymentToken` | `address` |
|| `price` | `uint256` |
| `SaleOrder` | `assetList` | `Asset[]` |
|| `currentOwner` | `address` |
|| `paymnetReceiver` | `address` |
|| `acceptedPaymentMode` | `Payment[]` |
|| `pfSaleFeeRate` | `uint16` |
|| `start` | `uint256` |
|| `end` | `uint256` |
|| `nonce` | `uint256` |

### `EXCHANGE_BUY_ORDER_TYPE`

| property | name | type |
| -------- | ---- | ---- |
| `Payment` | `paymentMode` | `bytes4` |
|| `paymnetToken` | `address` |
|| `price` | `uint256` |
| `BuyOrder` | `saleNonce` | `uint256` |
|| `buyer` | `address` |
|| `payer` | `address` |
|| `paymentDetails` | `Payment[]` |
|| `validUntil` | `uint256` |

### `ROYALTY_INFO_TYPE`

| property | name | type |
| -------- | ---- | ---- |
| `Royalty` | `receiver` | `address` |
|| `primaryPercentage` | `uint16` |
|| `secondaryPercentage` | `uint16` |
| `RoyaltyInfo` | `royaltyList` | `Royalty[]` |
|| `primaryCount` | `uint8` |
|| `secondaryCount` | `uint8` |
|| `secondaryOnwardsRoyaltyPercentage` | `uint16` |

### `PARTNER_FEE_RECEIVER_INFO_TYPE`

| property | name | type |
| -------- | ---- | ---- |
| `PartnerFeeReceiverInfo` | `collection` | `address` |
|| `partnerFeeReceiver` | `address` |


## 3.COLLECTION
This struct contains `SBINFT Nanakusa Factoy NFT` factory contract's info.

| factory contract name | version | network | address |
| --- | --- | --- | --- |
| SBINFT Nanakusa Factoy NFT | 1.0 | goerli | [0x72de008Bd205B1b8E7725a81596c6b2735bd2D25](https://goerli.etherscan.io/address/0x72de008Bd205B1b8E7725a81596c6b2735bd2D25) |
||| mumbai | [0x16895060eCd8C29E1a6625B02bF8425102B620e3](https://mumbai.polygonscan.com/address/0x16895060eCd8C29E1a6625B02bF8425102B620e3) |


### `NANAKUSA_MINT_DATA_TYPE`

| property | name | type |
| ----------------------- | --- | --- |
| MintData | name | type |
|| creator | address |
|| nftId | uint256 |
|| tokenURI | string |
