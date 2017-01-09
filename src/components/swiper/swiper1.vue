<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiperA">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    </swiper>

    <swiper :options="swiperOption1" ref="mySwiperB" >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
    </swiper>

  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'v-swiper',
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiperA() {
        console.log(this.$refs.mySwiperA);
        console.log(this.$refs.mySwiperA.swiper);
        return this.$refs.mySwiperA.swiper;
      },
      swipeB() {
        return this.$refs.mySwiperB.swiper;
      }
    },
    mounted() {
      // you can use current swiper object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper object', this.swiperA);
      this.$nextTick(() => {
        this.swiperA.params.control = this.swipeB;// 需要在Swiper2初始化后，Swiper1控制Swiper2
        this.swipeB.params.control = this.swiperA;
      });
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          effect: 'cube',
          grabCursor: true,
          cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        },
        swiperOption1: {
          pagination: '.swiper-pagination',
          effect: 'cube',
          grabCursor: true,
          cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        }
      };
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
