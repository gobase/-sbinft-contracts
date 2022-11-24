const MARKET_V1 = {
  address: {
    goerli: {
      Proxy: {
        Exchange: "0x0dBC6278762d6ec43937ebddc38E94cA246681aF",
        RoyaltyRegistry: "0xBCeA2000eb07fe4c70d0796d8F2160eA9e48Fc4a",
        TransferProxy: "0x7938037Ee9D0F8D8DdD379EfFdDaA117fCa9A668",
        PlatformRegistry: "0xFc2c13bd95f5d63F80555cF862873f01e0378cB6",
      },
      Implementation: {
        Exchange: "0x6740D6bd48c3137399bDA1651340Fa6C9Ded9709",
        RoyaltyRegistry: "0x89c315A78ACCE39804Db4A58909D02ee57501462",
        TransferProxy: "0xEcCAd43e72c7A7d10C4926Dfb4C17d491E4FE08E",
        PlatformRegistry: "0x2E0ba6d132891589A85bC9321c3046c1aDbF9cDA",
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
};

module.exports = {
  MARKET_V1,
};
