import Vue from 'vue';
import Vuex from 'vuex';
import * as country from '@/store/modules/country.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        country
    }
})