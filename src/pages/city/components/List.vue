<template>
    <div class="list-wrap" ref="wrapper">
        <div class="list">
            <div class="main-content">
                <div class="single-wrap" v-if="currentCity">
                    <div class="title">当前城市</div>
                    <div class="content">
                        <div class="single-city">{{ currentCity }}</div>
                    </div>
                </div>
                <div class="single-wrap">
                    <div class="title">热门城市</div>
                    <div class="content">
                        <div class="single-city" v-for="city in hotCities" :key="city.id" @click="choseCity">{{ city.name }}</div>
                    </div>
                </div>
                <div class="single-wrap" v-for="(item, key) in cities" :key="key" :ref="key">
                    <div class="title">{{ key }}</div>
                    <div class="content">
                        <div class="single-city" v-for="city in item" :key="city.id" @click="choseCity">{{ city.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="alphabet">
            <div class="single-alp" v-for="(item, key) in cities" :key="key" @click="clickNav">{{ key }}</div>
        </div>
    </div>
</template>

<script>
var log = console.log.bind(console)
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    props: ['hotCities', 'cities'],
    data() {
        return {
            currentCity: '',
        }
    },
    computed: {
      
    },
    methods: {
        clickNav(e) {
            var l = e.target.innerText
            var ele = this.$refs[l][0]
            this.scroll.scrollToElement(ele)
        },
        choseCity(e) {
            var city = e.target.innerText
            this.currentCity = city
            this.$store.commit('changeCurrentCity', city)
            this.$router.push('/')
        },

    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.wrapper)
        }) 
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    .list-wrap
        margin-top 0.9rem
        height 95vh
        overflow: hidden
        position relative
    .list 
        .single-wrap
            .title
                height 0.35rem
                line-height 0.35rem
                padding-left 0.2rem
                font-size 0.24rem
                color $greenColor
                background-color $greyColor
            .content
                display flex
                flex-wrap wrap
                .single-city
                    margin 0.15rem 0.05rem
                    width 20.8vw
                    height 0.5rem
                    line-height 0.5rem
                    text-align center
                    border-radius 0.8rem
                    border 1px solid #e5e5e5
    .alphabet
        z-index 1
        position absolute
        top 50%
        right 0
        transform translateY(-50%)
        // left 1rem
        display flex
        flex-direction column
        align-items center
        width 0.6rem
        font-size 0.2rem
        color $greenColor
        .single-alp
            margin-bottom 0.04rem

</style>

