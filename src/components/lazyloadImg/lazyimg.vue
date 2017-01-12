<template>
  <img v-lazy="imgObj" lazy="loading" class="bg-box" />

</template>
<script>
  export default {
    name: 'v-img',
    props: {
      imgUrl: {
        type: String
      }
    },
    computed: {
      imgObj() {
        if (this.imgUrl) {
          return this.imgUrl + '?imageView2/0/w/100';
        }
      }
    }
  };
</script>
<style>
@-webkit-keyframes fadeIn {
from {
    opacity: 0;
}
to {
    opacity: 1;
}
}
@keyframes fadeIn {
from {
    opacity: 0;
}
to {
    opacity: 1;
}
}
img[lazy=loaded] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
img[lazy=loading] {
  /*width: 40px!important;*/
  margin: auto;
}
img[lazy=error] {
  border-radius: 2px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.bg-box {
  height: 0;
  background-size: cover;
  padding-bottom: 100%;
}
.bg-box[lazy=loading] {
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: #f1f1f1;
}
.bg-box[lazy=loaded] {
  background-size: cover;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
   padding-bottom: 0px
}
</style>