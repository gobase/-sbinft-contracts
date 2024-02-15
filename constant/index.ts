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
    sepolia: {
      Proxy: {
        SBINFTForwarder: "0x6aAa044A6BbB3952bd6bBeec7cC482e64762bAFC",
        SBINFTMultiCall: "0xDFc37B2e739598077d08f6FB3d6baAE24913954D",
      },
      Implementation: {
        SBINFTForwarder: "0x16FaaF558CC5820Dd5bE8F099E56630314131d8f",
        SBINFTMultiCall: "0x866ceaFF7778643926271f1DDe9e9c5F13d0243a",
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
    oas_tcgtest: {
      Proxy: {
        SBINFTForwarder: "0x307E7a9713dBf6f19a2d2a2b670544f4791c4eC2",
        SBINFTMultiCall: "0x5832E3df2E83F060C417372a93758FE1C77E164D",
      },
      Implementation: {
        SBINFTForwarder: "0xf39692618f45d62946906DE36071fd86f0C7B275",
        SBINFTMultiCall: "0xc9017a9cf9bc3cd451C0FEC47CC8625492F70213",
      },
    },
    oas_mchtest: {
      Proxy: {
        SBINFTForwarder: "0x82618112E0870fF665317aEA93a83B66F05f524B",
        SBINFTMultiCall: "0x8C23B60E194afFE682F53c123fFAB1f35C0dF095",
      },
      Implementation: {
        SBINFTForwarder: "0xf39692618f45d62946906DE36071fd86f0C7B275",
        SBINFTMultiCall: "0x7E0207e83E2FA67817b66eC6b1b1aa7BC28D4Ee7",
      },
    },
    oas_bnvtest: {
      Proxy: {
        SBINFTForwarder: "0x60c4573056542292368545139173A613Ef84DaD9",
        SBINFTMultiCall: "0xD2eafF47eEa66BC1945296384de0E9BD69c333Ce",
      },
      Implementation: {
        SBINFTForwarder: "0xDa7eb3220E93A129C98CF6aD15bCA9F1a15b8144",
        SBINFTMultiCall: "0x0C54232F350faF7eAb01105aD5931e7E668F4BEF",
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
    oas_tcgmainnet: {
      Proxy: {
        SBINFTForwarder: "0xF94Eb74447C1Ccb9Bc10B0626c581a4dBD342a7C",
        SBINFTMultiCall: "0xAe6D415B807c3FbB85eb78CAbdCdCaa5EB37bEEF",
      },
      Implementation: {
        SBINFTForwarder: "0x8e3e0428016B8fD67D92597B546FF455b89eF3E8",
        SBINFTMultiCall: "0x9651555d3C882D52657C9399c79De6e212aBee3d",
      },
    },
    oas_mchmainnet: {
      Proxy: {
        SBINFTForwarder: "0xa6B8f8C34E86424674FAf648123e767Ac5b5C7DD",
        SBINFTMultiCall: "0xd613B3749A969B6D1Fc0b182E2dAE8d30901375C",
      },
      Implementation: {
        SBINFTForwarder: "0x8e3e0428016B8fD67D92597B546FF455b89eF3E8",
        SBINFTMultiCall: "0xa11EE75B7c74f4f1072635fae454d2113bD17915",
      },
    },
    oas_bnvmainnet: {
      Proxy: {
        SBINFTForwarder: "0x64f1DB9e431c13a6811B61AE7E3cEc266b766ff1",
        SBINFTMultiCall: "0xB5ebEA1214BDb6488AF948d230a89b5EE90170d6",
      },
      Implementation: {
        SBINFTForwarder: "0x3873A5BF624990dbfe85B5b947A442Cd8c036b87",
        SBINFTMultiCall: "0xBcBC9b9Fc75E8E32c5b8baFd9ed7f653378A7809",
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

const MARKET_V1_ASSET_TYPE_V1 = [
  { name: "originKind", type: "bytes4" },
  { name: "token", type: "address" },
  { name: "tokenId", type: "uint256" },
  { name: "partnerFeeRate", type: "uint16" },
  { name: "isSecondarySale", type: "uint8" },
];
const MARKET_V1_PAYMENT_TYPE = [
  { name: "paymentMode", type: "bytes4" },
  { name: "paymentToken", type: "address" },
  { name: "price", type: "uint256" },
];
const MARKET_V1_ASSET_TYPE_V2 = [
  { name: "originKind", type: "bytes4" },
  { name: "token", type: "address" },
  { name: "tokenId", type: "uint256" },
  { name: "value", type: "uint256" },
  { name: "partnerFeeRate", type: "uint16" },
  { name: "partnerFeeReceiver", type: "address" },
  { name: "isSecondarySale", type: "uint8" },
];
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
    sepolia: {
      Proxy: {
        Exchange: "0xBD8c6C61259CaFBa655551a39c408cFAAB7315da",
        RoyaltyRegistry: "0xF4ADDB64881f8b235576897794933b91374CD33E",
        TransferProxy: "0x46BeE94A14951a418b88aF425400278AEC0ff135",
        PlatformRegistry: "0x0f2144a24DE4411D3Ade6ed94e17F6Ec14C7281F",
      },
      Implementation: {
        Exchange: "0xa3CCE113cB23D4d125Bd44E75D590b198b315513",
        RoyaltyRegistry: "0x2CE2319C8187d0520Ab1a4B3F668063e08e5b8bC",
        TransferProxy: "0x0Cf9317bCD3D397368Beba2C8f1C9b5f32e37c28",
        PlatformRegistry: "0x2f129edc77C1DF844A1967c42e7DD4C537388089",
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
    oas_tcgtest: {
      Proxy: {
        Exchange: "0xe0666C21E3bC670848894EB1C59891094F437ebE",
        RoyaltyRegistry: "0xBD8c6C61259CaFBa655551a39c408cFAAB7315da",
        TransferProxy: "0xAAf5a52d76d44C2f0CEdD7646c932209Ef33426F",
        PlatformRegistry: "0x87533F126700Ae06acaEBA7E29c5cf71261C0825",
      },
      Implementation: {
        Exchange: "0x2CE2319C8187d0520Ab1a4B3F668063e08e5b8bC",
        RoyaltyRegistry: "0x2ff3004bE5c788Fb2b2ECAC89c44773A3C06fF8a",
        TransferProxy: "0x6aAa044A6BbB3952bd6bBeec7cC482e64762bAFC",
        PlatformRegistry: "0xDFc37B2e739598077d08f6FB3d6baAE24913954D",
      },
    },
    oas_mchtest: {
      Proxy: {
        Exchange: "0x99Bece68fcd6B94420c122Fd0f70F77F89Fb0Af1",
        RoyaltyRegistry: "0xE0F509Ec8E75244E43888d2A7E9041FD91dfc316",
        TransferProxy: "0x6B8D27A1457bC0F822B132B67BB2045Ae55e6e73",
        PlatformRegistry: "0xB0EB5AbD66baFe82BD1F6f72e4A13633B26BFf80",
      },
      Implementation: {
        Exchange: "0xC3063Bf25487E4fCFB6F5153E61c1dca1f19b37b",
        RoyaltyRegistry: "0x4f41dEb10581bcB0D9CAC8B0adc846ac01F19cEB",
        TransferProxy: "0x1073A8135bf53ADFcDd67b2C44e69E1e5Fa4D5D7",
        PlatformRegistry: "0xAdb6B7C3D1976a5e1fd0C69649b892E75877c040",
      },
    },
    oas_bnvtest: {
      Proxy: {
        Exchange: "0x5e5AC07Af8Fac3f7c42BAA506D7CcB194bAD4cE0",
        RoyaltyRegistry: "0x949f96A6bB6F384De3A1E314FEdD8f73018cCBEe",
        TransferProxy: "0x0Ec6d1B228411703B4137c2E4e9EF287596B3A26",
        PlatformRegistry: "0x1dDebc783BeB44764dEe2bb16Ca17392655B1B3C",
      },
      Implementation: {
        Exchange: "0xa3684C479C588773b7b0D5364e754E6172d0B89a",
        RoyaltyRegistry: "0x012d5A768e7bb982539847469d724a84d6eD0f53",
        TransferProxy: "0x1E5BA945b166D72B3B87f6003BB8E8e2b6A7cEe6",
        PlatformRegistry: "0xB9693dCb846B1dBd2BEd4A2AA8Ee67aC1F4e2135",
      },
    },
    oas_hvmainnet: {
      Proxy: {
        Exchange: "0x2564C8Ac021Fa8cddf83C5e9e63A8edaf37c907d",
        RoyaltyRegistry: "0xcaB65A1d8E655915D3F2630717FdeCb928c8f43d",
        TransferProxy: "0xdE21B92841f9c78DcCEac194ee4B01609dDCa93c",
        PlatformRegistry: "0x3FDb0BBac2912f3fb63a2A538f3B7945ce9A870F",
      },
      Implementation: {
        Exchange: "0x49259E0666349c55744Dfe9DacC79235724bA038",
        RoyaltyRegistry: "0x70f076C08bB720C079e2aea3566F1C4E48a46556",
        TransferProxy: "0x06a97db19843c15F90337492f07D7FF22b1493B6",
        PlatformRegistry: "0xe65DaD5846f3b7c962A3a4C90e440686EC0E40CA",
      },
    },
    oas_tcgmainnet: {
      Proxy: {
        Exchange: "0xa4Ef0aAc6BD6c07265433f82D3EABee7D1960496",
        RoyaltyRegistry: "0x2f406E71Ff5Ca146A4B775C01211C745A4430d1a",
        TransferProxy: "0xF020219090d4563D094fCd254D35b5C51bE5BBfC",
        PlatformRegistry: "0x3CEA44C54ca034cFa5843fE66A0E12f089198cEb",
      },
      Implementation: {
        Exchange: "0x1041C4621F9896E39362E05bCB55500441F5649b",
        RoyaltyRegistry: "0xA86499c81Ef14A0b53b3b85CaA2A830a54C99dBE",
        TransferProxy: "0xF5E84FFf11D1698eE607B318019EE3428B15Cf43",
        PlatformRegistry: "0x67e280Bf69D65B8c593be77B17AdE52F850CFDa7",
      },
    },
    oas_mchmainnet: {
      Proxy: {
        Exchange: "0xeCb55E860d442773B4C291F64802f4dE87107290",
        RoyaltyRegistry: "0xB5ebEA1214BDb6488AF948d230a89b5EE90170d6",
        TransferProxy: "0x9E8EDFA5f1Eb1A6a464FFf3DbE94bc03be46e097",
        PlatformRegistry: "0xbdFa569eb51c0CA4fBF43A25B7f902fb8ADDd2B4",
      },
      Implementation: {
        Exchange: "0xB53DE73B01F3C749B60f24ace34718479E1d153D",
        RoyaltyRegistry: "0xBcBC9b9Fc75E8E32c5b8baFd9ed7f653378A7809",
        TransferProxy: "0xF09c7BAedB1D389ead6515f2b8Ee53084352ADff",
        PlatformRegistry: "0xbAE2Fc679b4F9Dad24412da4796FB85bea2a9721",
      },
    },
    oas_bnvmainnet: {
      Proxy: {
        Exchange: "0x709a45c98b1F63B122E712b664A5E4f0A8d4f8d3",
        RoyaltyRegistry: "0xbAE2Fc679b4F9Dad24412da4796FB85bea2a9721",
        TransferProxy: "0xD950cE58b6EdE6aE837DA0dF4f6a92181DCe4c44",
        PlatformRegistry: "0x07b942C119e544730Dd55F2Cb0Cbfad91859A3da",
      },
      Implementation: {
        Exchange: "0x8116FD81177aAAc18C603f8c2dE546a2e30BE9f3",
        RoyaltyRegistry: "0x9E8EDFA5f1Eb1A6a464FFf3DbE94bc03be46e097",
        TransferProxy: "0xbdFa569eb51c0CA4fBF43A25B7f902fb8ADDd2B4",
        PlatformRegistry: "0xeCb55E860d442773B4C291F64802f4dE87107290",
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
  EXCHANGE_SALE_ORDER_TYPE_V1: {
    Asset: MARKET_V1_ASSET_TYPE_V1,
    Payment: MARKET_V1_PAYMENT_TYPE,
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
  EXCHANGE_BUY_ORDER_TYPE_V1: {
    Payment: MARKET_V1_PAYMENT_TYPE,
    BuyOrder: [
      { name: "saleNonce", type: "uint256" },
      { name: "buyer", type: "address" },
      { name: "payer", type: "address" },
      { name: "paymentDetails", type: "Payment" },
      { name: "validUntil", type: "uint256" },
    ],
  },
  EXCHANGE_SALE_ORDER_TYPE_V2: {
    Asset: MARKET_V1_ASSET_TYPE_V2,
    Payment: MARKET_V1_PAYMENT_TYPE,
    SaleOrder: [
      { name: "assetList", type: "Asset[]" },
      { name: "currentOwner", type: "address" },
      { name: "paymentReceiver", type: "address" },
      { name: "acceptedPaymentMode", type: "Payment[]" },
      { name: "pfSaleFeeRate", type: "uint16" },
      { name: "pfSaleFeeRateSecondary", type: "uint16" },
      { name: "start", type: "uint256" },
      { name: "end", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "version", type: "uint8" },
    ],
  },
  EXCHANGE_BUY_ORDER_TYPE_V2: {
    Payment: MARKET_V1_PAYMENT_TYPE,
    BuyOrder: [
      { name: "saleNonce", type: "uint256" },
      { name: "buyer", type: "address" },
      { name: "payer", type: "address" },
      { name: "firstAssetBuyValue", type: "uint256" },
      { name: "paymentDetails", type: "Payment" },
      { name: "validUntil", type: "uint256" },
      { name: "version", type: "uint8" },
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
    oas_tcgtest: {
      NANAKUSA_FACTORY: "0xe500B6E9a5CDf1Ebb4207e664F1B1C353Db0c4ff",
    },
    oas_mchtest: {
      NANAKUSA_FACTORY: "0xe0666C21E3bC670848894EB1C59891094F437ebE",
    },
    oas_bnvtest: {
      NANAKUSA_FACTORY: "0x6D07d5d8c689327f7D27BB488180Fc6Dac9cB5e7",
    },
    oas_hvmainnet: {
      NANAKUSA_FACTORY: "0x8b20C458B75E016b333bD5bB61eEE7dcF8D97071",
    },
    oas_tcgmainnet: {
      NANAKUSA_FACTORY: "0xBf7DE96481A27C289Ad5D6Ef526A2af012B59079",
    },
    oas_mchmainnet: {
      NANAKUSA_FACTORY: "0xCF28b8Fc0A0eED0542f30Bf0000B68aeD17A641b",
    },
    oas_bnvmainnet: {
      NANAKUSA_FACTORY: "0x5deB791729E8B1Ff6A4299A58fFC464BfFE01e83",
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
