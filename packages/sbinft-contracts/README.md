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

you can import abi from `@sbinft/contracts/abi`.

``` javascipt
const { abi, } = require("@sbinft/contracts/abi/sbinft/market/v1/exchange/Exchange.sol/Exchange.json");

// OR
const exchangeJSON = require("@sbinft/contracts/abi/sbinft/market/v1/exchange/Exchange.sol/Exchange.json");

console.log(abi);
console.log(exchangeJSON.abi);
```

# [constants](https://github.com/gobase/sbinft-contracts/tree/master/constant)
It contains address and data type definition for signing using EIP-712.
### Supported network:

| Network Name                  | Network ID    |
| ----------------------------- | ------------- |
| Ethereum Mainnet              | 1             |
| Ethereum Testnet (Sepolia)    | 11155111      |
| Polygon Mainnet               | 137           |
| Polygon Testnet (Amoy)        | 80002         |
| Avalanche Mainnet             | 43114         |
| Avalanche Testnet (Fuji)      | 43113         |
| Oasys Hub L1 Mainnet          | 248           |
| Oasys Hub L1 Testnet          | 9372          |
| HOME Verse Mainnet            | 19011         |
| HOME Verse Testnet            | 40875         |
| TCG Verse Mainnet             | 2400          |
| TCG Verse Testnet             | 12005         |
| MCH Verse Mainnet             | 29548         |
| MCH Verse Testnet             | 420           |
| GESO Verse Mainnet            | 428           |
| GESO Verse Testnet            | 42801         |

### Its divided into:
- GATEWAY_V1
  - `SBINFTForwarder` : *Upgradable*
  - `SBINFTMultiCall` : *Upgradable*
- MARKET_V1
  -  `Exchange` : *Upgradable*
  -  `RoyaltyRegistry` : *Upgradable*
  -  `TransferProxy` : *Upgradable*
  -  `PlatformRegistry` : *Upgradable*
- COLLECTION
  -  `NANAKUSA_FACTORY`

For Upgradable contracts use proxy address `[CONST].address.[NETWORK].proxy.[CONTRACT_NAME]` to call the contract.
