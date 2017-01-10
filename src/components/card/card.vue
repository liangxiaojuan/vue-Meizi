<template>
  <div class="card">
    <img :src="data.images[0]" alt="" width="100%" height="100%">
    <div class="card-content">
      <div class="desc">{{data.desc}}</div>
      <div class="card-content-bottom">
        <div class="who">{{data.who}}</div>
        <div class="time">2017-12-33</div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-card',
    props: {
      data: {
        type: Object
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "card.styl";
</style>
