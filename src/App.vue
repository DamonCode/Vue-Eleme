<template>
  <div>
    <v-header :seller="seller"></v-header> 
    <v-tab></v-tab>
    <router-view></router-view>

</template>
<script type="text/ecmascript-6">
import header from './components/header/header.vue';
import tab from './components/tab.vue';
const ERR_OK = 0;
export default{
  data () {
    return {
      seller: {}
    };
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errCode === ERR_OK) {
        this.seller = response.data;
      }
    });
  },
  components: {
    'v-header': header,
    'v-tab': tab
  }
};
</script>

<style>
</style>
