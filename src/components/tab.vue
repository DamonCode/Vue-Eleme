<template>
  <div class="tab border-1px">
      <div class="tab-items">
          <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-items">
          <a v-link="{path:'/ratings'}">评价</a>
      </div>
      <div class="tab-items">
          <a v-link="{path:'/seller'}">商家</a>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {

    };
</script>
<style lang="stylus" rel="stylesheets/stylus">
    @import "./common/stylus/mixin.styl"
    .tab
        display :flex
        width :100%
        height :40px
        line-height :40px
        .tab-items
            flex :1
            text-align :center
            // border-bottom :1px solid rgba(7, 17, 27, 0.1)  不适用于移动端 
            border-1px(rgba(7, 17, 27, 0.1))
            & > a /* &父类选择器*/
                display :block
                font-size :14px
                color :rgb(77, 85, 93)
                &.active
                    color :rgb(240, 20, 20)

</style>
