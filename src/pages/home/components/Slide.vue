<template>
    <div class="slide">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in imgSlides" :key="slide.id">
                {{ slide.id }}
                <image :src="slide.img" class="slide-img" />
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
    .slide
        position relative
        // margin-top 1.96rem
        height 1.37rem
        border 1px solid black
        .slide-img
            width 100%
</style>

