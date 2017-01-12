<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      <a v-for="data in datas" :href="data.url " target="view_window">
         <v-card :data="data" ></v-card>
      </a>
  </div>

</template>

<script type="text/ecmascript-6">
  import vCard from '../card/card.vue';
  export default
  {
    name: 'v-list',
    props: {
      type: {
        type: String
      }
    },
    data() {
      return {
        datas: [],
        page: 1,
        busy: false
      };
    },
    computed: {

    },
    methods: {
      loadTop() {
        this.$store.commit('UPDATE_LOADING', true);
        this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`).then((response) => {
          this.datas = this.datas.concat(response.body.results);
          this.busy = false;
          this.$nextTick(() => {
          this.$store.commit('UPDATE_LOADING', false);
        });
        });
      },
      loadMore() {
        this.busy = true;
        this.loadTop();
        this.page++;
      }
    },
    components: {
      vCard
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .list {
    padding: 15px;
  }
</style>
