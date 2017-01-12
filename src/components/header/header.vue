<template>
  <div>
    <div class="page-cover" v-show="menuShow" @click="isShow"></div>
    <header class="header" :class="{'show': menuShow}" @click="isShow">
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
    <v-menu :show="menuShow"></v-menu>
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
        'headerTitle', 'menuShow'
      ])
    },
    methods: {
      isShow() {
       this.$store.commit('UPDATE_MENUSHOW');
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
