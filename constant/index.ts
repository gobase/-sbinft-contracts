const MARKET_V1 = {
  address: {
    goerli: {
      Proxy: {
        SBINFTForwarder: "0x4f15D2F897A5561a536F09aDa698176f0ccC6945",
        SBINFTMultiCall: "0x687dea2daebD8f61BfbAfC9d975523933F3a4700",
        Exchange: "0x9b4f155eB58aC1E5B50f003A0F675B8Fcd97B46D",
        RoyaltyRegistry: "0xcE0Eb8E962008323319B2883e740cb30Bd511E14",
        TransferProxy: "0x0551122D05e47516176e6598fe38412DAfaE60B8",
        PlatformRegistry: "0xDa7eb3220E93A129C98CF6aD15bCA9F1a15b8144",
      },
      Implementation: {
        SBINFTForwarder: "0xFF408efF3894786B2e25D208b553669B13DA998E",
        SBINFTMultiCall: "0x2D439911b02DfD86A2f4e1720baF3e83E7091301",
        Exchange: "0x85BE186944E6fE7C5717e83545eFd6a151Eb788B",
        RoyaltyRegistry: "0x4C25E65F323FE896adE0D0B885fd93b57d40FD38",
        TransferProxy: "0xa103395bBe7c38Efe79f6d69ae9F771E5FD8D9C7",
        PlatformRegistry: "0x2Ef982A0a47143783e8514eEfF488bA53a8E7Bd3",
      },
    },
    mumbai: {
      Proxy: {
        SBINFTForwarder: "0x37560db95b6C27D69EEB265788fc19cf6C00b786",
        SBINFTMultiCall: "0xE57692B005B6Fb690a29b402459835a9bA080784",
        Exchange: "0x6961212c915B63873987D22d5A1591D5FF869C08",
        RoyaltyRegistry: "0xF02d5E61818dE883BF0dB12Cc63043fCB9B950ba",
        TransferProxy: "0x25ECb67E559Ab902707785FE402954f8aE4c00Fd",
        PlatformRegistry: "0xdf0043C64B9D99fA25374affDF0367C1c5836989",
      },
      Implementation: {
        SBINFTForwarder: "0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22",
        SBINFTMultiCall: "0x6E74A38c30B68A94Ff62C065F65F287eefEAd7B6",
        Exchange: "0x02E52834Ff628d3Bad1783df6636c3cdf434e693",
        RoyaltyRegistry: "0x72de008Bd205B1b8E7725a81596c6b2735bd2D25",
        TransferProxy: "0xda0a7bD5c6248e8859Ba045Ad0B6D2224c7bbb2D",
        PlatformRegistry: "0x02D3698362c2C0Dc7355D9234aef1dE094015A78",
      },
    },
  },
  EXCHANGE_CONTRACT_NAME: "SBINFT Exchange",
  EXCHANGE_CONTRACT_VERSION: "1.0",
  EXCHANGE_SALE_ORDER_TYPE: {
    Asset: [
      { name: "originKind", type: "bytes4" },
      { name: "token", type: "address" },
      { name: "tokenId", type: "uint256" },
      { name: "partnerFeeRate", type: "uint16" },
      { name: "isSecondarySale", type: "uint8" },
    ],
    Payment: [
      { name: "paymentMode", type: "bytes4" },
      { name: "paymentToken", type: "address" },
      { name: "price", type: "uint256" },
    ],
    SaleOrder: [
      { name: "assetList", type: "Asset[]" },
      { name: "currentOwner", type: "address" },
      { name: "paymentReceiver", type: "address" },
      { name: "acceptedPaymentMode", type: "Payment[]" },
      { name: "pfSaleFeeRate", type: "uint16" },
      { name: "start", type: "uint256" },
      { name: "end", type: "uint256" },
      { name: "nonce", type: "uint256" },
    ],
  },
  EXCHANGE_BUY_ORDER_TYPE: {
    Payment: [
      { name: "paymentMode", type: "bytes4" },
      { name: "paymentToken", type: "address" },
      { name: "price", type: "uint256" },
    ],
    BuyOrder: [
      { name: "saleNonce", type: "uint256" },
      { name: "buyer", type: "address" },
      { name: "payer", type: "address" },
      { name: "paymentDetails", type: "Payment" },
    ],
  },
  ROYALTY_REGISTRY_NAME: "SBINFT RoyaltyRegistry",
  ROYALTY_REGISTRY_VERSION: "1.0",
  ROYALTY_INFO_TYPE: {
    Royalty: [
      { name: "receiver", type: "address" },
      { name: "primaryPercentage", type: "uint16" },
      { name: "secondaryPercentage", type: "uint16" },
    ],
    RoyaltyInfo: [
      { name: "royaltyList", type: "Royalty[]" },
      { name: "primaryCount", type: "uint8" },
      { name: "secondaryCount", type: "uint8" },
      { name: "secondaryOnwardsRoyaltyPercentage", type: "uint16" },
    ],
  },
  PLATFORM_REGISTRY_NAME: "SBINFT Platform Registry",
  PLATFORM_REGISTRY_VERSION: "1.0",
  PARTNER_FEE_RECEIVER_INFO_TYPE: {
    PartnerFeeReceiverInfo: [
      { name: "collection", type: "address" },
      { name: "partnerFeeReceiver", type: "address" },
    ],
  },
};

module.exports = {
  MARKET_V1,
};
