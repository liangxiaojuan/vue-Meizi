<template>
  <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <v-card :data="o" v-for="o in data"></v-card>
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
        data: [],
        page: 1,
        busy: false
      };
    },
    created() {
      this.loadTop();
    },
    computed: {

    },
    methods: {
      loadTop() {
        console.log(this.type);
        this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`).then((response) => {
          this.data = this.data.concat(response.body.results);
          this.busy = false;
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
