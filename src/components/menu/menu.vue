<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="list-ul">
        <router-link v-for='menu in menus' class="icon-quanbu iconfont item" :to="menu" @click="updateHeader(menu)">{{MENU_CONVERT[menu]}}</router-link>
      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  const MENU_CONVERT = {'welfare': '福利', 'day': '每日推荐'};
  export default
  {
    name: 'v-menu',
    props: {
      show: {
        type: Boolean
      }
    },
    data() {
      return {
        MENU_CONVERT: MENU_CONVERT
      };
    },
    computed: {
      ...mapState([
        'menus'
      ])
  },
    methods: {
      updateHeader(title) {
        this.$store.commit('UPDATE_TITLE', title);
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';

</style>
