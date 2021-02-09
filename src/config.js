import yVaultV2 from './abi/yVaultV2.json'
import LidoVault from './abi/LidoVault.json'

// Main config file for common parameters
export default Object.freeze({
    'VenusVai' : {
        TITLE: "VenusVai",
        LOGO: "🪐💰",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xad6b79f4Beaef46DEad4b6A4188fd7c14Bf07c57",
        WANT_ADDR: "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
        WANT_SYMBOL: "VAI",
        COINGECKO_SYMBOL: "vai",
        VAULT_DEV : "akshaynexust",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'ICreamStaker' : {
        TITLE: "ICreamStaker",
        LOGO: "🍦💰",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0xDD715A2537aAc71317e07BF28655DA51f0897Bd7",
        WANT_ADDR: "0x58f651DDE51CAa87c4111B16ee0A6Fab061Ee564",
        WANT_SYMBOL: "iCream",
        COINGECKO_SYMBOL: "",
        VAULT_DEV : "akshaynexust",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'ICreamBNBLPFarm' : {
        TITLE: "ICreamBNBLPFarm",
        LOGO: "🍦💰",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x8aA5279EA08A699860860fd492AC6469B19baEF5",
        WANT_ADDR: "0x792a46f30f1F6208b24C8199C3F2403f2Df06637",
        WANT_SYMBOL: "ICLP",
        COINGECKO_SYMBOL: "",
        VAULT_DEV : "akshaynexust",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    },
    'SOAKBNBLPFarm' : {
        TITLE: "SOAKBNBLPFarm",
        LOGO: "🍦💰",
        VAULT_ABI: yVaultV2,
        VAULT_TYPE: 'yearn',
        VAULT_ADDR: "0x007109F96f9AA2523f283Faac074a1887EcCFF1a",
        WANT_ADDR: "0xc8FCBA816eF9B0c5bc03d9178CfCc7EF785B4f2f",
        WANT_SYMBOL: "ICLP",
        COINGECKO_SYMBOL: "",
        VAULT_DEV : "akshaynexust",
        BLOCK_ACTIVATED: 1606599919,
        VAULT_STATUS: "active",
    }
})