import CountryService from '@/services/CountryService';

export const state = {
    countries: [],
    country: {}
}

export const mutations = {
    SET_COUNTRIES(state, countries) {
        state.countries = countries;
    },
    SET_COUNTRY(state, country) {
        state.country = country;
    }
}

export const actions = {
    getCountries({ commit }) {
        return CountryService.query()
            .then(response => {
                commit('SET_COUNTRIES', response)
            })
            .catch(error => {
                console.log(error);
                throw error;
            })
    },
    getCountry({ commit }, countryCode) {
        return CountryService.getCountryByCode(countryCode)
            .then(response => {
                const returnedData = response[0];
                commit('SET_COUNTRY', returnedData);
                return returnedData;
            })
            .catch(error => {
                console.log(error);
                throw error;
            })
    }
}