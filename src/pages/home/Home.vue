<template>
    <div>
        <home-header></home-header>
        <home-slide :list="imgSlides"></home-slide>
        <home-location></home-location>
        <icon-list :iconList="iconList"></icon-list>
        <goods-list :goodsList="goodsList"></goods-list>
    </div>
</template>

<script>
var log = console.log.bind(console)
import HomeHeader from './components/Header'
import HomeSlide from './components/Slide'
import HomeLocation from './components/Location'
import IconList from './components/IconList'
import GoodsList from './components/GoodsList'
import axios from 'axios'

export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSlide,
        HomeLocation,
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
        apiHomeInfo() {
            axios.get('/api/index.json')
                .then(this.homeCallback)
        },
        homeCallback(res) {
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
        this.apiHomeInfo()
    }
}
</script>

<style>

</style>

