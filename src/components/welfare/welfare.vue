<template>
  <div class="welfare-wrapper">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div class="welfare-center">
          <figure v-for="aa in leftData">
            <img :src="aa.url">
            <!--<figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>-->
          </figure>
        </div>
        <div class="welfare-center">
          <figure v-for="aa in rightData">
            <img :src="aa.url">
            <!--<figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>-->
          </figure>
        </div>
      </div>

  </div>
</template>
<script type="text/ecmascript-6">
export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false
      };
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
        this.$http.get('https://gank.io/api/data/福利/10/2').then((response) => {
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
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "welfare.styl";
</style>
