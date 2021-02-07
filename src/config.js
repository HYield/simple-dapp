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
    }
})