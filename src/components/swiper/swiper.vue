<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">
      <v-day></v-day>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination">asdasdasdasdas</div>
  </swiper>

</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import vDay from '../day/day.vue';
  const TAB_NAME = ['推荐', '排行榜'];
  export default {
    name: 'v-swiper',
    components: {
      swiper,
      swiperSlide,
      vDay
    },
    data() {
      return {
        playPageShow: false,
        blurBgShow: false,
        rankshow: true,
        routerViewAnimation: 'page-slide',
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender(swiper, index, className) {
            return `<div class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</div>`;
            // return '<span class="' + className + ' swiper-pagination-bullet-custom' + '">' + (index + 1) + '</span>';
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      };
    },
    mounted() {
//      setInterval(() => {
//        console.log('simulate async data');
//        let swiperSlides = this.swiperSlides;
//        if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1);
//      }, 3000);
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .swiper-item {
    height: 100%;
  }

  .swiper-pagination-bullet-custom {
    width: 100% !important;
    height: 100% !important;
    margin:0 !important;
    text-align: center;
    line-height: 50px;
    color: #999999;
    border-radius: 0 !important;
    background: #fff !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #000;

  }

  .swiper-pagination{
    top:0;
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
  }

</style>
