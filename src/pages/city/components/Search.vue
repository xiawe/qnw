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
        <div class="content-wrap" v-show="keyword">
            <div class="search-content">
                <div class="single-city" v-for="city in result" :key="city.id" @click="choseCity">{{ city }}</div>
            </div>
            <div class="no-result" v-if="noResult">
                暂无搜索结果！
            </div>
        </div>
    </div>
</template>

<script>
var log = console.log.bind(console)
export default {
    name: 'CitySearch',
    props: ['cities'],
    data() {
        return {
            keyword: '',
            result: [],
        }
    },
    computed: {
        noResult () {
            return !this.result.length
        }     
    },
    methods: {
        choseCity(e) {
            var city = e.target.innerText
            this.currentCity = city
            this.$store.commit('changeCurrentCity', city)
            this.$router.push('/')
        },
    },
    watch: {
        keyword(k) {
            if (!k) {
                return
            }
            // log('k', k)
            var arr = this.cities
            var re = []
            for (let i = 0; i < arr.length; i++) {
                var o = arr[i]
                if (o.spell.indexOf(k) > -1 || o.name.indexOf(k) > -1) {
                    re.push(o.name) 
                }
            }
            // log('re', re)
            this.result = re
        },
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    @import '../../../assets/iconfont/iconfont.css'
    .search-wrap
        z-index 99
    .search
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
    .search-content
        z-index 9
        margin-top 0.9rem
        height 100vh
        background-color #fff
        display flex
        flex-wrap wrap
        justify-content space-around
        align-items flex-start
        .single-city
            margin 0.15rem 0.05rem
            width 20.8vw
            height 0.5rem
            line-height 0.5rem
            text-align center
            border-radius 0.8rem
            border 1px solid #e5e5e5
</style>

