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
        SBINFTForwarder: "0xf33341Af610F70CF3847C9683c5c5A4b0207443a",
        SBINFTMultiCall: "0xE57692B005B6Fb690a29b402459835a9bA080784",
        Exchange: "0x698ef268F3525cDAA2e2143c0BE732bE02D45A4a",
        RoyaltyRegistry: "0xeA608dEf0a4bbA902caD9Fb0364e67Bead20e302",
        TransferProxy: "0x159bE038c1110313b030FE8a3f703AaBF0c3010e",
        PlatformRegistry: "0x3630a8ffC70012850B9350D3f32Ac9331cD03b30",
      },
      Implementation: {
        SBINFTForwarder: "0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22",
        SBINFTMultiCall: "0x6E74A38c30B68A94Ff62C065F65F287eefEAd7B6",
        Exchange: "0x5e4217040cdc17cbaA1329B405F8c2ff40e40D88",
        RoyaltyRegistry: "0xe3c3c77e1dAff748d73a004C8a18f10f9Ffbe8b5",
        TransferProxy: "0x2b3A6551458852414d6B3B4467Ad1948b6f43600",
        PlatformRegistry: "0x82656aeeEcb04820aFac5C2f0b7d7a33E00A53Ee",
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
      { name: "validUntil", type: "uint256" },
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
