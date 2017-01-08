<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="list-ul">
        <router-link v-for='a in title' class="icon-quanbu iconfont item" to="/welfare" @click="updateHeader('welfare')">{{a}}</router-link>
      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>

<script>
import {title} from '../../common/js/uz.js';
console.log(title);
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
        aa: this.$store.state.headerTitle,
        title: title
      };
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
