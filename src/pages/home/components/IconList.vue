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
    props: ['iconList'],
    data() {
        return {

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

