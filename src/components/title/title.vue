<template>
  <div class="title-wrapper">
    <div class="line"></div>
    <div class="text">{{ text }}</div>
    <div class="line"></div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    text: {
      type: String
    }
  }
};
</script>
<style lang="stylus" rel="stylesheets/stylus">
  .title-wrapper
    display: flex
    width : 80%
    margin : 30px auto 24px auto
    .line
      flex : 1
      position : relative
      top : -6px
      border-bottom : 1px solid rgba(255,255,255,0.2)
    .text
      padding : 0 12px
      font-size : 14px
</style>


