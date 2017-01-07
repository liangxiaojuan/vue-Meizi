<template>
  <div id="app">
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #app .aaa {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    transition: all .3s ease;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    z-index: 6;
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
