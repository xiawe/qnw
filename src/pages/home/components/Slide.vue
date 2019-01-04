<template>
    <div class="slide">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in imgSlides" :key="slide.id">
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
            imgSlides: [{
                id: 2120,
                img: 'https://oss-image.dfs168.com/aimages/20181226/0709e77a2a0cfc95fd22c4db72e02fa1.jpg',
                url: 'http://tj.dfs168.com/tj/channel?id=6085',
            }, {
                id: 2171,
                img: 'https://oss-image.dfs168.com/aimages/20190102/cbdbea590843697c8f409f7e5ff0ca52.jpg',
                url: 'http://tj.dfs168.com/tj/channel?id=6327',
            }, {
                id: 2170,
                img: 'https://oss-image.dfs168.com/aimages/20190102/1f8edf7fa8ac91b0fc5a85e0f8185904.jpg',
                url: 'http://tj.dfs168.com/tj/channel?id=6322',
            }, ],

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

