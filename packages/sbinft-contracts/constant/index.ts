const GATEWAY_V1 = {
  address: {
    goerli: {
      Proxy: {
        SBINFTForwarder: "0x1E5BA945b166D72B3B87f6003BB8E8e2b6A7cEe6",
        SBINFTMultiCall: "0xF02d5E61818dE883BF0dB12Cc63043fCB9B950ba",
      },
      Implementation: {
        SBINFTForwarder: "0xFF408efF3894786B2e25D208b553669B13DA998E",
        SBINFTMultiCall: "0x0b803bfcC5200D6860C49f59113042dac4ed2444",
      },
    },
    mumbai: {
      Proxy: {
        SBINFTForwarder: "0xf33341Af610F70CF3847C9683c5c5A4b0207443a",
        SBINFTMultiCall: "0x9A544B6505e1a67A3CFF4e161Fc2998e2e15dc4d",
      },
      Implementation: {
        SBINFTForwarder: "0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22",
        SBINFTMultiCall: "0x5CE6D38A000C96F1C9a54df66704080efaee5DBd",
      },
    },
    oas_hvtest: {
      Proxy: {
        SBINFTForwarder: "0xD05E40ccF2dBe9A470FF5f6B085BF7Bd75020D35",
        SBINFTMultiCall: "0x4f15D2F897A5561a536F09aDa698176f0ccC6945",
      },
      Implementation: {
        SBINFTForwarder: "0x055A72CD68cD096E0fA45D9A8075e01443B80919",
        SBINFTMultiCall: "0x326D42D8216B15BA4BFa4D51bd8b63EB12D3B8f3",
      },
    },
    oas_hvmainnet: {
      Proxy: {
        SBINFTForwarder: "0x21772C6a9af37EE79a855c0b5A1d93B5643eC761",
        SBINFTMultiCall: "0x511DD875f682E666b433B3BF0C295b5DCCF2fEDc",
      },
      Implementation: {
        SBINFTForwarder: "0xE5c4224f7AEb85C3c0c2BDa02286bf8d5A83BC22",
        SBINFTMultiCall: "0x80b300c5a3424A21153f7dcd4492474B8b0a8151",
      },
    },
    polygon: {
      Proxy: {
        SBINFTForwarder: "0x944d1a6FC282f5F79054e17B829c59fbC50bE348",
        SBINFTMultiCall: "0x10328A984C69d3C45Bd4777b6604597f031f804D",
      },
      Implementation: {
        SBINFTForwarder: "0x3cC65ae5ae673912E90A39f03d24b40955012847",
        SBINFTMultiCall: "0xD77Accd7A63f568Bf17A0694117a17CF4c4791bA",
      },
    },
    mainnet: {
      Proxy: {
        SBINFTForwarder: "0xCcB6a41b93A6C326A91652CA816bE6A9fAeAC1B9",
        SBINFTMultiCall: "0x77fb62b25D1EE9F28c35120ECE2b6e04942a435b",
      },
      Implementation: {
        SBINFTForwarder: "0x2564C8Ac021Fa8cddf83C5e9e63A8edaf37c907d",
        SBINFTMultiCall: "0x1a43ea3edD0696723e397069883a31fCD8681d50",
      },
    },
  },
  SBINFT_FORWARDER_CALL_CONTRACT_NAME: "SBINFTForwarder",
  SBINFT_FORWARDER_CONTRACT_VERSION: "1.0",
  FORWARD_REQUEST_TYPE: {
    ForwardRequest: [
      { name: "from", type: "address" },
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
      { name: "gas", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "data", type: "bytes" },
    ],
  },
  MULTI_CALL_CONTRACT_NAME: "SBINFT MultiCall",
  MULTI_CALL_CONTRACT_VERSION: "1.0",
  CALL_INFO_TYPE: {
    Call: [
      { name: "target", type: "address" },
      { name: "callData", type: "bytes" },
      { name: "value", type: "uint256" },
    ],
    CallInfo: [{ name: "callList", type: "Call[]" }],
  },
};

const MARKET_V1 = {
  address: {
    goerli: {
      Proxy: {
        Exchange: "0x82F1bEfE4B33a0638227D5af8990798c11eE54D6",
        RoyaltyRegistry: "0xB9693dCb846B1dBd2BEd4A2AA8Ee67aC1F4e2135",
        TransferProxy: "0xf21a39443F02318F8dd55fcD1f28822886c04e6a",
        PlatformRegistry: "0xA284CD5d0eE8FEEcBeC7558144200df434b7D99f",
      },
      Implementation: {
        Exchange: "0x9D16Fd013bDf9d224485722f77A44fD4c92685C1",
        RoyaltyRegistry: "0x0Ec6d1B228411703B4137c2E4e9EF287596B3A26",
        TransferProxy: "0x1dDebc783BeB44764dEe2bb16Ca17392655B1B3C",
        PlatformRegistry: "0x5e5AC07Af8Fac3f7c42BAA506D7CcB194bAD4cE0",
      },
    },
    mumbai: {
      Proxy: {
        Exchange: "0x698ef268F3525cDAA2e2143c0BE732bE02D45A4a",
        RoyaltyRegistry: "0xeA608dEf0a4bbA902caD9Fb0364e67Bead20e302",
        TransferProxy: "0x159bE038c1110313b030FE8a3f703AaBF0c3010e",
        PlatformRegistry: "0x3630a8ffC70012850B9350D3f32Ac9331cD03b30",
      },
      Implementation: {
        Exchange: "0x5e4217040cdc17cbaA1329B405F8c2ff40e40D88",
        RoyaltyRegistry: "0xe3c3c77e1dAff748d73a004C8a18f10f9Ffbe8b5",
        TransferProxy: "0x2b3A6551458852414d6B3B4467Ad1948b6f43600",
        PlatformRegistry: "0x82656aeeEcb04820aFac5C2f0b7d7a33E00A53Ee",
      },
    },
    oas_hvtest: {
      Proxy: {
        Exchange: "0x044F72D36d1be6cEdB091c8406116afb90599915",
        RoyaltyRegistry: "0x92c2B3da780C25adCED6a98098ddb71def328e23",
        TransferProxy: "0x5f12c48856eA2654dE3a549D7D751FcD36D57398",
        PlatformRegistry: "0xa847539748E0eBAabaa4d09A0CBb6BF31D9Ed6a7",
      },
      Implementation: {
        Exchange: "0xe28c82489D93509059fFf269CCFbbF77EfcE49D3",
        RoyaltyRegistry: "0x24bD764F6bCE1642DdF5A7a6f9aE73a55276b5F8",
        TransferProxy: "0xf4DCb2081BCfa71553E453f59B6A6E82b540bb43",
        PlatformRegistry: "0x60449a3135FCcfD234951a0253068FD0312C7e55",
      },
    },
    oas_hvmainnet: {
      Proxy: {
        Exchange: "0x26B07AD16cBFb652eD6611087EC9F45b8E16Ace3",
        RoyaltyRegistry: "0xE1d6412CD70A1Ff2185C59Fff2c92cFb745113Fb",
        TransferProxy: "0x6B2f88c9f445e6Af816e7b144BF48FA9ec6EB72d",
        PlatformRegistry: "0x63fe86B60271aca06b28a7F0D71A2C9Cf2C6A1DB",
      },
      Implementation: {
        Exchange: "0xd56E271bc4A63ecFd73eB3076D3b00230de416CB",
        RoyaltyRegistry: "0xa85Bdf75e633717Cb310bd9beF1b15257d47A1bc",
        TransferProxy: "0x52B6E5a01213414952e72B96039D7FF5637598Ea",
        PlatformRegistry: "0xEa8220431F7E3e430447BdF049B76a6eC0Add2AD",
      },
    },
    polygon: {
      Proxy: {
        Exchange: "0x08d12249846A786813F9B34c04e021c2060cFB62",
        RoyaltyRegistry: "0xe9fa6B27B8645DbA1313A7b7dA4276247DeBC9Aa",
        TransferProxy: "0x594cA98aa711dd134315Cef388eDb4522b984747",
        PlatformRegistry: "0xCdC45Ee96881326283eB2F2A768C1A9C6FafC402",
      },
      Implementation: {
        Exchange: "0xB9A83eb825bBeF7336e852C73A27E41F05503d65",
        RoyaltyRegistry: "0x95fB25701C5540239A39edC1B03316F67c44A3F7",
        TransferProxy: "0x2AD721a320A8AA41b6C2f5781f92fcd89dc44ee6",
        PlatformRegistry: "0xE392A876229b420B30b2e0c399C8427A09014f2a",
      },
    },
    mainnet: {
      Proxy: {
        Exchange: "0xBcBC9b9Fc75E8E32c5b8baFd9ed7f653378A7809",
        RoyaltyRegistry: "0x568c76da3427E234Fd9Da49444A16296Fa1f7184",
        TransferProxy: "0xa6B8f8C34E86424674FAf648123e767Ac5b5C7DD",
        PlatformRegistry: "0xd613B3749A969B6D1Fc0b182E2dAE8d30901375C",
      },
      Implementation: {
        Exchange: "0x64f1DB9e431c13a6811B61AE7E3cEc266b766ff1",
        RoyaltyRegistry: "0x164b686350203888A8058c7c883dA1e1b047d145",
        TransferProxy: "0x6f743075eB0511582e783Fa8f5a23942804f6417",
        PlatformRegistry: "0xa11EE75B7c74f4f1072635fae454d2113bD17915",
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

const COLLECTION = {
  address: {
    goerli: {
      NANAKUSA_FACTORY: "0x72de008Bd205B1b8E7725a81596c6b2735bd2D25",
    },
    mumbai: {
      NANAKUSA_FACTORY: "0x16895060eCd8C29E1a6625B02bF8425102B620e3",
    },
    oas_hvtest: {
      NANAKUSA_FACTORY: "0xa103395bBe7c38Efe79f6d69ae9F771E5FD8D9C7",
    },
    oas_hvmainnet: {
      NANAKUSA_FACTORY: "0x8b20C458B75E016b333bD5bB61eEE7dcF8D97071",
    },
    polygon: {
      NANAKUSA_FACTORY: "0x3791Ceb91c8bEA59d839E86f30E1158932C7B10d",
    },
    mainnet: {
      NANAKUSA_FACTORY: "0x4c1a91c6aa88d27dBAEf24D5FBD1cA1Ade5Bd6d7",
    },
  },
  NANAKUSA_FROM_FACTORY_CONTRACT_NAME: "SBINFT Nanakusa Factoy NFT",
  NANAKUSA_FROM_FACTORY_CONTRACT_VERSION: "1.0",
  NANAKUSA_MINT_DATA_TYPE: {
    MintData: [
      { name: "creator", type: "address" },
      { name: "nftId", type: "uint256" },
      { name: "tokenURI", type: "string" },
    ],
  },
};

module.exports = {
  GATEWAY_V1,
  MARKET_V1,
  COLLECTION,
};
