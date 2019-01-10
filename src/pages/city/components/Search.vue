<template>
    <div class="search-wrap">
        <div class="search">
            <router-link to="/">
                <i class="icon iconfont icon-fanhui"></i>
            </router-link>
            <div class="search-wrap">
                <i class="icon iconfont icon-sousuokuang-sousuo"></i>
                <input v-model="keyword" type="text" class="search-input" placeholder="搜索城市" /> 
            </div>
        </div>
    </div>
</template>

<script>
var log = console.log.bind(console)
export default {
    name: 'CitySearch',
    data() {
        return {

        }
    },
    computed: {
      
    },
    methods: {

    },
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    @import '../../../assets/iconfont/iconfont.css'
    .search
        z-index 99
        position fixed
        top 0
        padding-top 0.2rem
        padding-bottom 0.1rem
        display flex
        align-items center
        width 100vw
        height 0.6rem
        background-color #fff
        .icon-fanhui
            margin 0 0.18rem
            color #333
        .search-wrap
            position relative
            .icon-sousuokuang-sousuo
                position: absolute
                left: 0.38rem
                top: 0.15rem
                border-radius: 0.02rem
                color: #999999
                font-size: 0.15rem
            .search-input
                margin-left 0.1rem
                width 75vw
                height 0.5rem
                padding-left 0.7rem
                border-radius 0.28rem
                background-color $greyColor
</style>

