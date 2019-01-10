import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentCity: '北京',
    },
    // actions: {
    //     changeCurrentCity(ctx, city) {
    //         ctx.commit('changeCurrentCity', city)
    //     }
    // },
    mutations: {
        changeCurrentCity(state, city) {
            state.currentCity = city
        }
    }
})

export default store