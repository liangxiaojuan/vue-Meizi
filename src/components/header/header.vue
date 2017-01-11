<template>
  <div>
    <div class="page-cover" v-show="show" @click="isShow"></div>
    <header class="header" :class="{'show': show}" @click="isShow">
      <header class="bar bar-nav">
        <div class="pull-left">
          <span class="iconfont icon-fenlei"></span>
        </div>
        <div class="title">{{headerTitle}}</div>
        <div class="pull-right">
          <span class="iconfont icon-sousuo_sousuo"></span>
        </div>
      </header>
    </header>
    <v-menu :show="show"></v-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  import vMenu from '../menu/menu.vue';
  import {mapState} from 'vuex';
  export default
  {
    name: 'v-header',
    components: {
      vMenu
    },
    data() {
      return {
        show: false
      };
    },
    computed: {
      ...mapState([
        'headerTitle'
      ])
    },
    methods: {
      isShow() {
        this.show = !this.show;
      },
      hideDetail() {
        this.detailShow = false;
      }
    }
//    vuex: {
//      getters: {
//        headerTitle: getHeaderTitle
//      }
//    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "header.styl";
</style>
