<template>
    <div>
        <home-header></home-header>
        <home-slide></home-slide>
        <icon-list></icon-list>
        <goods-list></goods-list>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSlide from './components/Slide'
import IconList from './components/IconList'
import GoodsList from './components/GoodsList'

export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSlide,
        IconList,
        GoodsList,
    }
}
</script>

<style>

</style>

