<template>
    <div class="slide">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in list" :key="slide.id">
                <a :href="slide.url">
                    <img :src="slide.img" class="slide-img" />
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
var log = console.log.bind(console)
export default {
    name: 'HomeSlide',
    props: ['list'],
    data() {
        return {
            swiperOption: {
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                loop: true,
                autoplay: true,
            },
        }
    },

    methods: {

    },
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    @import '../../../assets/iconfont/iconfont.css'

    .slide >>> .swiper-pagination-bullet-active
        background-color $greenColor
    .slide
        position relative
        margin-top 1.96rem
        overflow hidden
        width 100%
        height 0
        padding-bottom 36.7%
        .slide-img
            width 100%
</style>

