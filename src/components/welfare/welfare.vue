<template>
  <div class="welfare-wrapper">
    <div class="aaaa">


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
  import BScroll from 'better-scroll';
  export default {
    data() {
      return {
        leftData: [],
        rightData: []
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
        this.$nextTick(() => {
          console.log(this.$el);
          this.scroll = new BScroll(this.$el, {click: true, probeType: 1});
          let self = this;
          this.scroll.on('touchend', function (pos) {
            if (pos.y > 50) {
              setTimeout(function () {
                self.loadItems();
              }, 1000);
            }
          });
        });
      });
    },
    methods: {
      loadItems() {
        this.$http.get('https://gank.io/api/data/福利/10/2').then((response) => {
          let left = response.body.results.filter((data, i) => {
            return (i + 1) % 2 === 1;
          });
          let right = response.body.results.filter((data, i) => {
            return (i + 1) % 2 !== 1;
          });
          this.leftData = this.leftData.concat(left);
          this.rightData = this.rightData.concat(right);
          this.$nextTick(() => {
            this.scroll.refresh();
          });
        });
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "welfare.styl";
</style>
