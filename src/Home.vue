<template lang="pug">
v-app
  v-app-bar(app) Vaults registry
  v-main
    v-container(fluid)
      v-card(class="mx-auto"
              max-width="344"
              outlined)
        v-card-title 🚀 Prod Vaults
        v-card-actions(v-for="vault in yearnVaults")
            v-btn
              a( class="links" :href="'/' + vault.URL") {{ vault.LOGO }} <span class="text">{{ vault.TITLE }}</span>
              status-tag(:status="vault.VAULT_STATUS")
</template>

<script>
import StatusTag from "./components/StatusTag";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    StatusTag,
  },
  props: ["allConfig", "chainId", "chainCoin"],
  data() {
    return {
      items: Object.keys(this.allConfig)
        .map((key) => ({
          ...this.allConfig[key],
          URL: key,
        }))
    };
  },
  filters: {},
  methods: {},
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
    yearnVaults() {
      var items = this.items;

      var result = items
        .filter((item) => item.CHAIN_ID === this.chainId)
        .filter((item) => item.VAULT_TYPE === "yearn")
        .slice()
        .reverse();

      return result;
    },
    yearnVaultsActive() {
      var items = this.items;

      var result = items
        .filter((item) => item.CHAIN_ID === this.chainId)
        .filter(
          (item) =>
            item.VAULT_TYPE === "yearn" && item.VAULT_STATUS === "active"
        )
        .slice()
        .reverse();

      return result;
    },
    yearnVaultsOther() {
      var items = this.items;

      var result = items
        .filter((item) => item.CHAIN_ID === this.chainId)
        .filter(
          (item) =>
            item.VAULT_TYPE === "yearn" &&
            item.VAULT_STATUS != "active" &&
            item.VAULT_STATUS != "stealth"
        )
        .slice()
        .reverse();

      return result;
    },
    experimentVaults() {
      var items = this.items;

      var result = items
        .filter((item) => item.CHAIN_ID === this.chainId)
        .filter(
          (item) =>
            item.VAULT_TYPE === "experiment" && item.VAULT_STATUS != "stealth"
        )
        .slice()
        .reverse();

      return result;
    },
  },
};
</script>