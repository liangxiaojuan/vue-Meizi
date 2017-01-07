<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="list-ul">
        <router-link class="icon-quanbu iconfont item" to="/welfare" @click="updateHeader('welfare')">福利</router-link>
      </div>
    </div>
    <div class="menu-other">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
        aa: this.$store.state.headerTitle
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
