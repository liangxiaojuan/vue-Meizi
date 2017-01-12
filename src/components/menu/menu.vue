<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="menu-header">
        <img class="menu-avatar" src="https://avatars0.githubusercontent.com/u/11735533?v=3&amp;u=02b515725d0e52cdf5f02e2dbdc98c1de3ddbcc2&amp;s=400"
          alt="">
        <div class="menu-title">YangYi && liangxiaojuan</div>
      </div>
      <div class="menu-ul">
        <div v-for='menu in menus' @click="updateHeader(MENU_CONVERT[menu], menu)">
          <router-link class="icon-quanbu iconfont item border-1px" :to="menu">
            <div class="menu-icon">
              <i class="iconfont " :class="'icon-'+ menu"></i>
            </div>
            <span class="menu-text">{{MENU_CONVERT[menu]}}</span>
            <div class="menu-new" v-show="menu ==='day' && news>0">
              <span>5</span>
            </div>
          </router-link>
        </div>

      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  const MENU_CONVERT = { 'welfare': '福利', 'day': '每日推荐', 'ios': 'IOS', android: 'Android', web: '前端' };
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
        'menus', 'news'
      ])
      },
      methods: {
        updateHeader(title, menu) {
          this.$store.commit('UPDATE_TITLE', title);
           this.$store.commit('UPDATE_MENUSHOW');
           if (menu === 'day') {
              this.$store.commit('UPDATE_NEWS');
           }
        }
      }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';

</style>