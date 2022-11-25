const MARKET_V1 = {
  address: {
    goerli: {
      Proxy: {
        SBINFTForwarder: "0xe24a92fF1069CF8CC2c1948beb39D848388E59DF",
        Exchange: "0x0624Ce7A8B4aFf06592773f8b9950566E6c22E6F",
        RoyaltyRegistry: "0x90f608f8b3DC917b8Def6427DE9BdD1502402454",
        TransferProxy: "0x36d67d4281385fB1AEdC8179c9564796d4B193e0",
        PlatformRegistry: "0x122a2782Be0e322039a93E8E031a8B6884e96089",
      },
      Implementation: {
        SBINFTForwarder: "0xFF408efF3894786B2e25D208b553669B13DA998E",
        Exchange: "0x91990b942631DE7d84A5C47a8B81B8a90D339939",
        RoyaltyRegistry: "0x785E90c4f416182aE3762B3E0244aEb65Ee68160",
        TransferProxy: "0x9b3B816751D98c2bB134CBb3d0C44d9354a7F704",
        PlatformRegistry: "0xE794F314437a432DDb9E53f8a4E44e04D67C3f36",
      },
    },
    mumbai: {
      Proxy: {
        SBINFTForwarder: "0x80b300c5a3424A21153f7dcd4492474B8b0a8151",
        Exchange: "0xA69929Fef1F55c4E80322F7b8bA632c5088F8a33",
        RoyaltyRegistry: "0xDF7DD74B4319686efCFdccbD5dd4868f91188FDf",
        TransferProxy: "0xA542854f5d79ABc52474443CB7942Ec0A14f60FC",
        PlatformRegistry: "0xD12109d0F24DF2fbbbbc45A84b1eFc523f2A04ba",
      },
      Implementation: {
        SBINFTForwarder: "0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22",
        Exchange: "0x1329d0fbdFD06F4d06497E9B0231d58F947A4e2c",
        RoyaltyRegistry: "0x511DD875f682E666b433B3BF0C295b5DCCF2fEDc",
        TransferProxy: "0x8b20C458B75E016b333bD5bB61eEE7dcF8D97071",
        PlatformRegistry: "0xde82B414417Db4836c6f7BDff58d9771C179664A",
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
