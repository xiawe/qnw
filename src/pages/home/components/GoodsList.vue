<template>
    <div class="goods-list">
        <div class="single-goods-wrap" v-for="goods in goodsList" :key="goods.id">
            <div class="img-wrap">
                <img :src="goods.image" class="goods-img" />
            </div>
            <div class="goods-title">{{ goods.name }}</div>
            <div class="goods-price">{{ goods.price_sales }}</div>
        </div>
    </div>
</template>

<script>
var log = console.log.bind(console)
export default {
    name: 'GoodsList',
    props: ['goodsList'],
    data() {
        return {

        }
    },

    methods: {

    },
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    @import '../../../assets/iconfont/iconfont.css'

    .goods-list
        margin 0 auto
        display flex
        flex-wrap wrap
        justify-content space-between
        width 93vw
        .single-goods-wrap
            margin-bottom 0.16rem
            width 45vw
            background-color #f9f9f9
            .img-wrap
                overflow hidden
                width 100%
                height 0
                padding-bottom 45vw
                background-color #f1f1f1
                .goods-img
                    margin 2vw auto
                    display block
                    width 41vw
            .goods-title
                margin 0.15rem 1.8vw 0
                font-size: 0.28rem
                line-height 0.33rem 
                font-weight: 500
                color: #555555
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
            .goods-price
                margin 0.21rem 1.8vw 0.23rem
                font-size: 0.34rem
                font-weight: bold
                color #ff5146
</style>

