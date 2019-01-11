import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentCity: localStorage.city || '北京',
    },
    // actions: {
    //     changeCurrentCity(ctx, city) {
    //         ctx.commit('changeCurrentCity', city)
    //     }
    // },
    mutations: {
        changeCurrentCity(state, city) {
            state.currentCity = city
            localStorage.city = city
        }
    }
})

export default store