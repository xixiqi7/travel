import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'
try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e){}
const store = new Vuex.Store({
    state: {
        city: defaultCity
    },
    mutations: {
        clickChange(state,city){
            this.state.city = city
            try {
                localStorage.city = city
            } catch (e) {}
        }
    }
})

export default store