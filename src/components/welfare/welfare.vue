<template>
        <div class="welfare-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        <div class="welfare-center">
          <figure v-for="aa in leftData">
           <v-img :imgUrl="aa.url"></v-img>
            <!--<figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>-->
          </figure>
        </div>
        <div class="welfare-center">
          <figure v-for="bb in rightData">
            <v-img :imgUrl="bb.url"></v-img>
            <!--<figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>-->
          </figure>
        </div>
      </div>
</template>
<script>
import vImg from '../lazyloadimg/lazyimg.vue';
export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 1
      };
    },
    components: {
      vImg
    },
    created() {
      this.$http.get('https://gank.io/api/data/福利/10/1').then((response) => {
        let left = response.body.results.filter((data, i) => {
          return (i + 1) % 2 === 1;
        });
        let right = response.body.results.filter((data, i) => {
          return (i + 1) % 2 !== 1;
        });
        this.leftData = this.leftData.concat(left);
        this.rightData = this.rightData.concat(right);
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
  @import "welfare.styl";
</style>
