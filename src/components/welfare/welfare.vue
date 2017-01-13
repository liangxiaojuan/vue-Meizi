<template>
  <div class="welfare-wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div class="welfare-center">
      <figure v-for="data in leftData" @click="selectDetails(data.createdAt)">
        <v-img :imgUrl="data.url"></v-img>
      </figure>
    </div>
    <div class="welfare-center">
      <figure v-for="data in rightData" @click="selectDetails(data.createdAt)">
        <v-img :imgUrl="data.url"></v-img>
      </figure>
    </div>
    <v-details ref="details" :time="time" :detailsData="detailsData"></v-details>
  </div>
</template>

<script>
  import { objectDate } from '../../common/js/date';
  import vImg from '../lazyloadimg/lazyimg.vue';
  import vDetails from '../details/details.vue';
  export default {
    data() {
      return {
        leftData: [],
        rightData: [],
        busy: false,
        page: 1,
        detailsData: {},
        time: ''
      };
    },
    components: {
      vImg,
      vDetails
    },
    created() {
    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
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
        // $nextTick() 在dom 重新渲染完后执行
          this.$nextTick(() => {
            this.$store.commit('UPDATE_LOADING', false);
          });
        });
      },
      loadMore() {
        this.busy = true;
        this.loadTop();
        this.page++;
      },
      selectDetails(time) {
        this.time = time;
          this.$store.commit('UPDATE_LOADING', true);
        let object = objectDate(this.time);
        this.$http.get(`http://gank.io/api/history/content/day/${object.Y}/${object.M}/${object.D}`).then((response) => {
          let data = response.body.results;
          this.detailsData = data[0];
          this.$refs.details.show();
           this.$nextTick(() => {
            this.$store.commit('UPDATE_LOADING', false);
          });
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "welfare.styl";
</style>
