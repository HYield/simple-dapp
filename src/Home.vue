<template lang="pug">
v-app
  v-app-bar(app) Test Vaults Registry
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
        //- div.column.is-one-third
        //-   h2.title.is-4 🧠 Experiments
        //-     li(v-for="vault in experimentVaults")
        //-       a( class="links" :href="'/' + vault.URL") {{ vault.LOGO }} <span class="text">{{ vault.TITLE }}</span>
</template>

<script>
import StatusTag from './components/StatusTag';

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    StatusTag
  },
  props: ['allConfig'],
  data() {
    return {
    };
  },
  filters: {},
  methods: {},
  computed: {
    yearnVaults() {
      var items = this.allConfig;
  
      var result = Object.keys(items)
        .map(((key) => ({
          ...items[key],
          URL: key
        })))
        .filter(item => item.VAULT_TYPE === 'yearn')

      return result;
    },
    experimentVaults() {
      var items = this.allConfig;
  
      var result = Object.keys(items)
        .map(((key) => ({
          ...items[key],
          URL: key
        })))
        .filter(item => item.VAULT_TYPE === 'experiment')

      return result;
    }
  },
  created() {},
}
</script>