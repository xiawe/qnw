<template>
    <div class="header">
        <div class="search-wrap">
            <i class="icon iconfont icon-sousuokuang-sousuo"></i>
            <input class="search" type="text" placeholder="请输入想找的商品" />
            <div class="phone-box">
                <i class="icon iconfont icon-dianhua"></i>
            </div>
        </div>
        <div class="sort">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="(slide, index) in swiperSlides" :key="slide.id">
                    <div :class="[{ 'active': i == index }, 'single-choice']" @click="slideTab(index)">
                        {{ slide }}
                    </div>
                </swiper-slide>
            </swiper>       
        </div>
    </div>
</template>

<script>
var log = console.log.bind(console)
export default {
    name: 'HomeHeader',
    data() {
        return {
            swiperOption: {
                autoplay: false,
                slidesPerView: 5,
                spaceBetween: 20,   
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }                           
            },
            swiperSlides:['热门', '农药', '肥料', '农用品', '课程', '套餐'],
            active: false,
            i: ''
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      
    },
    methods: {
        slideTab(index) {
            this.i = index
            var a = Math.floor(this.swiperSlides.length / 2)
            log(index, a)
            if (index >= a) {
                this.swiper.slideTo(a, 1000, false)
            } else if (index < a) {
                this.swiper.slideTo(0, 1000, false)
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    @import '../../../assets/iconfont/iconfont.css'
    .header
        z-index 99
        position fixed
        top 0
        background-color #fff
        .search-wrap
            position: relative
            display: flex
            align-items: flex-end
            height: 0.88rem
            .icon-sousuokuang-sousuo
                position: absolute
                left: 0.38rem
                top: 0.48rem
                border-radius: 0.02rem
                color: #999999
                font-size: 0.15rem
            .search
                margin: 0.2rem 0.24rem 0 0.24rem
                width: 5.46rem
                height: 0.64rem
                padding-left: 0.68rem
                border-radius: 0.08rem
                background-color: $greyColor
            .phone-box
                position: relative
                width: 0.64rem
                height: 0.64rem
                border-radius: 0.08rem
                background-color: $greyColor
                .icon-dianhua
                    position: absolute
                    left: 0.17rem
                    top: 0.17rem
                    border-radius: 0.02rem
                    color: #999999
                    font-size: 0.26rem
        .sort
            position relative
            height 0.88rem
            line-height 0.88rem
            font-size: 0.28rem
            font-weight: 500
            text-align: center
            color: #666666
            overflow hidden
            .single-choice
                height 0.88rem
            .active 
                font-size: 0.36rem
                font-weight: 900
                text-align: center
                color: #333333
            .active::before 
                content: "";
                position: absolute;
                left: 50%;
                bottom: 0;
                width: 0;
                height: .08rem;
                border-radius: .04rem;
                background-color: #5db524;
                width: .46rem;
                margin-left: -.23rem;
                transition: all .3s cubic-bezier(.35,0,.25,1) .09s,all .3s cubic-bezier(.35,0,.25,1);
                display: block!important;               
        .pot 
            position absolute
            top 0
            display flex
            justify-content space-between
            align-items center
            opacity 1
            height 0.88rem
            width 50vw
            margin-left 25vw

</style>

