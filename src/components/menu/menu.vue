<template>
  <div class="menu">
    <div class="menu-list" :class="{'show': show}">
      <div class="list-ul">
        <router-link class="icon-quanbu iconfont item" :to="{'name':'list',query:{tab:'all'}}">全部</router-link>
        <router-link class="icon-hao iconfont item" :to="{'name':'list',query:{tab:'good'}}">Android</router-link>
        <router-link class="icon-fenxiang iconfont item" :to="{'name':'list',query:{tab:'share'}}">iOS</router-link>
        <router-link class="icon-wenda iconfont item" :to="{'name':'list',query:{tab:'ask'}}">休息视频</router-link>
        <router-link class="icon-zhaopin iconfont item" :to="{'name':'list',query:{tab:'job'}}">福利</router-link>
        <router-link class="icon-xiaoxi iconfont item line" :to="{'name':'message'}">拓展资源</router-link>
        <router-link class="icon-about iconfont item" :to="{'name':'about'}">前端</router-link>
        <router-link class="icon-about iconfont item" :to="{'name':'about'}">瞎推荐</router-link>
        <router-link class="icon-about iconfont item" :to="{'name':'about'}">App</router-link>
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
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import 'menu.styl';

</style>
