<template>
    <div class="location">
        <div class="left-wrap">
            <div class="location-wrap">
                <i class="icon iconfont icon-weizhi"></i>
                <router-link to="/city">
                    <div class="location-text">{{ this.$store.state.currentCity }}</div>
                </router-link>
            </div>
            <div class="tip-wrap">
                有 <span class="num">6789</span> 种植户都在大丰收购买农资
            </div>
        </div>
        <div class="right-wrap">
            <div class="title">农服管家</div>
            <img class="avatar" src="/static/img/home/avatar.png" />
        </div>
    </div>
</template>

<script>
var log = console.log.bind(console)
export default {
    name: 'HomeLocation',
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
    .location
        margin 0.3rem auto
        margin-bottom 0
        display flex
        justify-content space-between
        width 93.6vw
        height 1.08rem
        background-color #eeeeee
        .left-wrap
            .location-wrap
                margin 0.2rem 0 0.14rem 0.24rem
                height 0.3rem
                line-height 0.3rem
                display flex
                align-items center
                .icon-weizhi
                    margin-right 0.13rem
                    color $greenColor
                .location-text
                    font-size: 0.3rem
                    font-weight: bold
                    color: #333333
            .tip-wrap
                margin-left 0.24rem
                margin-bottom 0.2rem
                font-size 0.26rem
                color #999999
                span 
                    color #ff5146
        .right-wrap
            display flex
            width 1.83rem
            align-items center
            background-color #e5e5e5
            .title
                margin-left 0.24rem
                width 0.6rem
                height 0.6rem
                line-height 0.3rem
                font-size 0.26rem
                font-weight bold
                color $greenColor
            .avatar
                width 0.72rem
            
</style>

