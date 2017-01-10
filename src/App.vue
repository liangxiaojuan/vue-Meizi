<template>
  <div >
    <vHeader></vHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import vMenu from './components/menu/menu.vue';
  import vHeader from './components/header/header.vue';
  export default {
    name: 'app',
    components: {
      vMenu,
      vHeader
    },
    data() {
      return {
        show: false
      };
    },
    methods: {
      isShow() {
        this.show = !this.show;
      },
      hideDetail() {
        this.detailShow = false;
      }
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    margin-top: 60px;
  }


  #app .show {

    transform: translateX(200px);
  }

  #app .page-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 7;
  }
</style>
