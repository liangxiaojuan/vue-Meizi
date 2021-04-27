<template>
    <div class="loading" v-show="show">
        <div class="loader-inner ball-pulse">
            <div>123</div>
            <div>132</div>
            <div></div>
        </div>
         </div>
</template>
<script>
    export default {
        name: 'v-loading',
        props: {
            show: {
                type: Boolean
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './loading.styl';
</style>