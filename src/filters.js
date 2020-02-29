import Vue from 'vue';
// import CountryService from './services/CountryService'; 


Vue.filter('localizeNumber', function (number) {
    if (!number) return 0;
    return number.toLocaleString();
})

Vue.filter('getBorderCountryName', function (borderCountry) {
    if (!borderCountry) return '';
    return borderCountry[0].name;
})