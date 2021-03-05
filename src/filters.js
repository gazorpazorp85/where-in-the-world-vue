import Vue from 'vue';

Vue.filter('localizeNumber', function (number) {
    if (!number) return 0;
    return number.toLocaleString();
})