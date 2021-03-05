import CountryService from '@/services/CountryService';

export const state = {
    countries: [],
    country: {},
    filterBy: null,
}

export const mutations = {
    SET_COUNTRIES(state, countries) {
        state.countries = countries;
    },
    SET_COUNTRY(state, country) {
        state.country = country;
    },
    SET_FILTER(state, { filterBy }) {
        state.filterBy = filterBy;
    }
}

export const getters = {
    countriesToShow(state) {
        if (!state.filterBy || state.filterBy.name === '' && state.filterBy.region === '') return state.countries;
        const { name, region } = state.filterBy;
        const lowerCaseFilterName = name.toLowerCase();
        const lowerCaseRegionName = region.toLowerCase();
        return state.countries.filter(country =>
            country.name.toLowerCase().includes(lowerCaseFilterName) &&
            country.region.toLowerCase().includes(lowerCaseRegionName))
    },
    countryToShow(state) {
        return state.country;
    }
}

export const actions = {
    async getCountries({ commit }) {
        try {
            const countries = await CountryService.query();
            commit('SET_COUNTRIES', countries);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    async getCountry({ commit }, countryCode) {
        try {
            const country = await CountryService.getCountryByCode(countryCode);
            commit('SET_COUNTRY', country[0]);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}