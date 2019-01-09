<template>
    <div>
        <city-search></city-search>
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
        }
    },
    methods: {
        apiCityInfo() {
            axios.get('/api/city.json')
                .then(this.cityCallback)
        },
        cityCallback(res) {
            res = res.data
            if (res.ret) {
                var data = res.data
                this.hotCities = data.hotCities
                this.cities = data.cities
            }
        }

    },
    mounted() {
        this.apiCityInfo()
    }
}
</script>

<style>

</style>

