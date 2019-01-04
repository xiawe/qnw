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
    data() {
        return {
            "goodsList": [{
                "id": 10939,
                "spu": 102654,
                "name": "【丰创严选】蜜乐图中微量元素肥料20kg/袋 20kg*25袋",
                "gc_id": 2442,
                "storage": 7,
                "price_sales": "3250.00",
                "price_market": "4000.00",
                "icon_name": "新品",
                "image": "https://oss-image.dfs168.com/store/goods/20181226/d8a1eca82806192de86e96d4376eb6aa.jpg",
                "promotion_tags": []
            }, {
                "id": 10919,
                "spu": 102670,
                "name": "【大丰收定制】伊丰盾生物有机肥40kg 40kg*25袋",
                "gc_id": 2445,
                "storage": 93,
                "price_sales": "2500.00",
                "price_market": "3200.00",
                "icon_name": "新品",
                "image": "https://oss-image.dfs168.com/store/goods/20181211/f83d1dd1bad3126948ab2ea22a2acd78.jpg",
                "promotion_tags": []
            }, {
                "id": 10580,
                "spu": 102147,
                "name": "大连亚农威帝中微量元素肥2.5kg 2.5kg*1袋",
                "gc_id": 2442,
                "storage": 7638,
                "price_sales": "60.00",
                "price_market": "80.00",
                "icon_name": "",
                "image": "https://oss-image.dfs168.com/store/goods/20190103/dbaed06a23d64e669846ecd17ea78ed7.png",
                "promotion_tags": []
            }, {
                "id": 10278,
                "spu": 102285,
                "name": "【大丰收定制】磷酸二氢钾1kg 1kg*1袋",
                "gc_id": 2423,
                "storage": 34353,
                "price_sales": "16.00",
                "price_market": "25.00",
                "icon_name": "",
                "image": "https://oss-image.dfs168.com/store/goods/20181024/10f92e907d23363fe37c8efba008ac0d.jpg",
                "promotion_tags": ["示范"]
            },]
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

