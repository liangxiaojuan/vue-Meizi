<template>
  <div class="day">
    <h1>{{content.title}}</h1>
    <div v-html="content.content"></div>
  </div>

</template>

<script type="text/ecmascript-6">
  import vImg from '../lazyloadimg/lazyimg.vue';
  export default {
    name: 'v-day',
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 1,
        content: false
      };
    },
    components: {
      vImg
    },
    created() {
      this.$http.get('http://gank.io/api/history/content/day/2017/01/05').then((response) => {
        this.content = response.body.results[0];
      });
    },
    methods: {
      loadTop() {
        this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`).then((response) => {
          let left = response.body.results.filter((data, i) => {
            return (i + 1) % 2 === 1;
          });
          let right = response.body.results.filter((data, i) => {
            return (i + 1) % 2 !== 1;
          });
          this.leftData = this.leftData.concat(left);
          this.rightData = this.rightData.concat(right);
          this.busy = false;
        });
      },
      loadMore() {
        this.busy = true;
        console.log(1);
        this.loadTop();
        this.page++;
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .day h1{
    text-align: left;
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 20px;
  }
  .day p img {
    width: auto;
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
  .day p:nth-last-child(2) {
    display: none;
  }
  .day p:nth-last-child(1) {
    display: none;
  }
 .day [target=_blank] img {
   display: none;
 }
</style>
