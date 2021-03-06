import Vue from 'vue';
import Vuex from 'vuex';
import * as country from '@/store/modules/country.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        country
    },
    state: {
        filterOptions: [
            'Show All',
            'Africa',
            'America',
            'Asia',
            'Europe',
            'Oceania'
        ],
        isDarkModeOn: JSON.parse(localStorage.getItem('darkMode')) || false
    },
    getters: {
        filterOptions(state) {
            return state.filterOptions;
        },
        darkMode(state) {
            return state.isDarkModeOn;
        }
    },
    mutations: {
        setDarkMode(state) {
            state.isDarkModeOn = !state.isDarkModeOn;
            localStorage.setItem('darkMode', state.isDarkModeOn);
        }
    }
})