<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">
      <v-day :data="slide"></v-day>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import vDay from '../day/day.vue';
  const TAB_NAME = ['今天', '昨天', '前天', '三天前', '四天前'];
  export default {
    name: 'v-recommend',
    components: {
      swiper,
      swiperSlide,
      vDay
    },
    created() {
      this.$store.commit('UPDATE_LOADING', true);
      this.$http.get('http://gank.io/api/history/content/5/1').then((response) => {
        this.swiperSlides = response.body.results;
        this.$nextTick(() => {
          this.$store.commit('UPDATE_LOADING', false);
        });
      });
    },
    data() {
      return {
        swiperSlides: [],
        TAB_NAME: [],
        playPageShow: false,
        blurBgShow: false,
        rankshow: true,
        routerViewAnimation: 'page-slide',
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender(swiper, index, className) {
            return `<div class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</div>`;
          }
        }
      };
    },
    mounted() {
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
    color: #03a9f4;
    background: #03a9f4;
    font-size: 20px

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
