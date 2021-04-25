<template lang="pug">
v-app
  v-app-bar(app) Test Vaults Registry
  v-main
    v-container(fluid)
      div(v-if="isDrizzleInitialized && chainId", id="app")
        Section(:config="config" :allConfig="allConfig" :chainId="chainId" :chainCoin="chainCoin")
      div(v-else , id="app")
        v-progress-linear(indeterminate color="primary")
</template>
<script>
import config from './config.js'
import chains from './chains.json'
import Vault from './Vault'
import Home from './Home'
import NotFound from './NotFound'
import { mapGetters } from 'vuex'
import Web3 from 'web3';

const vaultPath = window.location.pathname.substring(1)
const vaultConfig = config[vaultPath] || null;

let VaultType;

switch (window.location.pathname) {
  default:
    VaultType = Object.prototype.hasOwnProperty.call(config, vaultPath) ? Vault : NotFound;
}

/*
const VaultType = window.location.pathname === '/yvsteth' ? LidoVault : (
  Object.prototype.hasOwnProperty.call(config, vaultPath) ? Vault : NotFound
)
*/

const Section = window.location.pathname === '/' ? Home : VaultType

let web3 = new Web3(Web3.givenProvider);
window.ethereum.on("chainChanged", (chainIdHex) =>
  window.location.reload()
);


export default {
  name: 'app',
  components: {
    Section,
  },
  data() {
    return {
      config: vaultConfig,
      allConfig: config,
      isHome: window.location.pathname === '/',
    }
  },
  asyncComputed: {
    ...mapGetters('drizzle', ['isDrizzleInitialized', 'drizzleInstance']),
    chainId() {
      if (this.isDrizzleInitialized) {
        return this.drizzleInstance.web3.eth.getChainId();
      }
      return 0
    },
    chainName() {
      if (this.chainId) {
        return chains[this.chainId].name;
      }
    },
    chainCoin() {
      if (this.chainId) {
        return chains[this.chainId].coin;
      }
    }
  }
}
</script>
