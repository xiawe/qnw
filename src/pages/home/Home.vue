<template>
    <div>
        <home-header></home-header>
        <home-slide></home-slide>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSlide from './components/Slide'
export default {
    name: 'home',
    components: {
        HomeHeader,
        HomeSlide,
    }
}
</script>

<style>

</style>

