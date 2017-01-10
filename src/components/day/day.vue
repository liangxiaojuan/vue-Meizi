<template>
  <div class="day" rel="dom">
    <h1>{{data.title}}</h1>
    <div  v-html="data.content"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  import vImg from '../lazyloadimg/lazyimg.vue';
  export default {
    name: 'v-day',
    props: {
      data: {
        type: Object
      }
    },
    data() {
      return {
        content: false
      };
    },
    components: {
      vImg
    },
    created() {
      this.$nextTick(() => {
        var tags = document.body.getElementsByTagName('img');
        for (let i = 0; i < tags.length; i++) {
          tags[i].removeAttribute('style');
        }
      });
    },
    methods: {

    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .day {
    padding-top: 50px;
  }
  .day p{
    font-size: 0;
  }
  .day h1{
    text-align: left;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .day h2{
    display: none;
  }
  .day p img {
    width: 100%;
  }
  .day img {
    width: 100%;
  }
  .day h3 {
    color: #000000;
    text-align: left;
    padding-left: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  .day ul {
    color: #000000;
    text-align: left;
    padding-left: 40px;
    font-size: 14px;
    font-weight: 400;
  }
  .day ul li{
    line-height: 20px;
  }
  .day ul  img, .day p:nth-last-child(2), .day p:nth-last-child(1),
  .day [target=_blank] img ,.day embed{
    display: none;
  }
</style>
