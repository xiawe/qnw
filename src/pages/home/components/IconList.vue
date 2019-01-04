<template>
    <div class="icon-list">
        <div class="single-wrap" v-for="item in iconList" :key="item.id">
            <div class="img-wrap">
                <img class='icon-img' :src="item.img" />
            </div>
            <div class="icon-tip">{{ item.tag }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IconList',
    data() {
        return {
            iconList: [{
                img: 'https://oss-image.dfs168.com/aimages/20181228/53e0d7009f8cab29e420cb4062652d92.png',
                tag: '邀请有奖'
            }, {
                img: 'https://oss-image.dfs168.com/aimages/20181228/ab378b33f4cffd8450e28346a357b420.png',
                tag: '签到有礼'
            }, {
                img: 'https://oss-image.dfs168.com/aimages/20181228/40ba9b8fa3dc73202bc5b3baa941a48d.png',
                tag: '丰收社区'
            }, {
                img: 'https://oss-image.dfs168.com/aimages/20181228/41f50c711fdcc68155bfa5f99b4ec03e.png',
                tag: '丰收检测'
            }, {
                img: 'https://oss-image.dfs168.com/aimages/20190102/a4369a5ece6f98dfb631cebe313bc85b.png',
                tag: '丰创严选'
            }, {
                img: 'https://oss-image.dfs168.com/aimages/20190102/989e45a8e4152d3922014e9a1e806e69.png',
                tag: '丰收定制'
            }, {
                img: 'https://oss-image.dfs168.com/aimages/20190102/c84380a92d0a1e5d73c0243859411be8.png',
                tag: '方案套餐'
            }, {
                img: 'https://oss-image.dfs168.com/aimages/20190102/5e519e66d2f51551fc91ccc93f2ef642.png',
                tag: '清仓热卖'
            },]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    @import '../../../assets/iconfont/iconfont.css'

    .icon-list
        display flex
        flex-wrap wrap
        justify-content space-between
        padding 0.21rem 0 0.3rem 
        width 100vw
        .single-wrap
            margin 0 4% 0.15rem 4%
            margin-left 4%
            margin-right 4%
            width 15%
            .img-wrap
                overflow hidden
                width 100%
                height 0
                padding-bottom 15vw
                .icon-img
                    width 100%
            .icon-tip
                font-size: 0.24rem
                font-weight: 500
                text-align: center
                color: #444444
</style>

