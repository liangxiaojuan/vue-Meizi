<template>
  <div style="padding: 10px">
    <v-card :data="o" v-for="o in data"></v-card>
  </div>

</template>

<script type="text/ecmascript-6">
  import vCard from '../card/card.vue';
  export default
  {
    name: 'v-ios',
    props: {
      show: {
        type: Boolean
      }
    },
    data() {
      return {
        data: []
      };
    },
    created() {
      this.$http.get('http://gank.io/api/data/Android/20/10').then((response) => {
        this.data = this.data.concat(response.body.results);
      });
    },
    computed: {

    },
    methods: {

    },
    components: {
      vCard
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
