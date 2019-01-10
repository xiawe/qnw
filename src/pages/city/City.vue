<template>
    <div class="city-wrap">
        <city-search :cities="cityArr"></city-search>
        <city-list :hotCities="hotCities" :cities="cities"></city-list>
    </div>
</template>

<script>
var log = console.log.bind(console)
import axios from 'axios'
import CitySearch from './components/Search'
import CityList from './components/List'

export default {
    name: 'City',
    components: {
        CitySearch,
        CityList,
    },
    data() {
        return {
            hotCities: '',
            cities: '',
            cityArr: '',
        }
    },
    methods: {
        apiCityInfo() {
            axios.get('/api/city.json')
                .then(this.cityCallback)
        },
        cityCallback(res) {
            res = res.data
            if (!res.ret) {
                return
            }
            var data = res.data
            this.hotCities = data.hotCities
            this.cities = data.cities
            var c = data.cities
            var keys = Object.keys(c)
            var cityArr = []
            for (let i = 0; i < keys.length; i++) {
                // log(i, c[keys[i]])
                cityArr = cityArr.concat(c[keys[i]])
            }
            this.cityArr = cityArr
        }

    },
    mounted() {
        this.apiCityInfo()
    }
}
</script>

<style>
</style>

