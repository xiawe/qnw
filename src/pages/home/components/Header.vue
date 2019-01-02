<template>
    <div class="header">
        <div class="search-wrap">
            <input class="search" type="text" placeholder="请输入想找的商品" />
            <div class="phone-box">
                <i class="iconfont icon-sousuokuang-sousuo"></i>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~style/varible.styl'
    .header
        .search-wrap
            border: 1px solid black
            display: flex
            .search
                margin: 0.2rem 0.24rem 0 0.24rem
                width: 6.14rem
                height: 0.64rem
                border-radius: 0.08rem
                background-color: $greyColor
</style>

