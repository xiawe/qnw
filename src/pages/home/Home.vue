<template>
    <div>
        <home-header></home-header>
        <home-slide :list="imgSlides"></home-slide>
        <icon-list :iconList="iconList"></icon-list>
        <goods-list :goodsList="goodsList"></goods-list>
    </div>
</template>

<script>
var log = console.log.bind(console)
import HomeHeader from './components/Header'
import HomeSlide from './components/Slide'
import IconList from './components/IconList'
import GoodsList from './components/GoodsList'
import axios from 'axios'

export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSlide,
        IconList,
        GoodsList,
    },
    data() {
        return {
            imgSlides: '',
            iconList: '',
            goodsList: '',
        }
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            var res = res.data
            if (res.error == 0) {
                var data = res.data
                this.imgSlides = data.imgSlides
                this.iconList = data.iconList
                this.goodsList = data.goodsList

            }
        }
    },
    mounted() {
        this.getHomeInfo()
    }
}
</script>

<style>

</style>

