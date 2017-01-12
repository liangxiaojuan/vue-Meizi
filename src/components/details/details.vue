<template>
    <transition name="fade">
        <div v-show="showFlag" class="details">
            <div>
                <header class="header">
                    <header class="bar bar-nav" @click="hide">
                        <div class="pull-left">
                            <span class="iconfont icon-left"></span>
                        </div>
                        <div class="title">{{detailsData.publishedAt || time | formatDate}}</div>
                    </header>
                </header>
                <v-day :data="detailsData" ref="day"></v-day>
            </div>
        </div>
    </transition>
</template>
<script>
    import { formatDate } from '../../common/js/date';
    import BScroll from 'better-scroll';
    import vDay from '../day/day.vue';
    export default {
        name: 'v-details',
        props: {
            time: {
                type: String
            },
            detailsData: {
                type: Object
            }
        },
        data() {
            return {
                showFlag: false
            };
        },
        created() {
        },
        methods: {
            show() {
                this.showFlag = true;
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$el, {
                            click: true
                        });
                    } else {
                        this.scroll.refresh();
                    }
                    this.$refs.day.clearStyle();
                });
            },
            hide() {
                this.showFlag = false;
            }
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            }
        },
        components: {
            vDay
        }
    };
</script>


<style lang="stylus" rel="stylesheet/stylus">
    @import './details.styl';
    
</style>