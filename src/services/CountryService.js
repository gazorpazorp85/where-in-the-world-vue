import Axios from 'axios';

const BASE_URL = 'https://restcountries.eu/rest/v2';

export default {
    query,
    getCountryByName,
    getCountryByCode
}

async function query() {
    const { data } = await Axios.get(`${BASE_URL}/all`);
    return data || [];
}

async function getCountryByName(countryName) {
    const { data } = await Axios.get(`${BASE_URL}/name/${countryName}?fullText=true`);
    return data || {};
}

async function getCountryByCode(countryCode) {
    const { data } = await Axios.get(`${BASE_URL}/alpha?codes=${countryCode}`);
    return data || {};
}