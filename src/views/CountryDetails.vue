<template>
  <section v-if="country" class="country-details-page" :class="{darkMode: isDarkModeOn}">
    <div class="flex column main-container country-details-container">
      <div class="flex pointer capitalize back-btn" :class="{backBtnDark: isDarkModeOn}" @click="this.goBack">
        <span class="back-btn-text">back</span>
      </div>
      <div class="flex details-subcontainer">
        <div class="details-flag-container">
          <img :src="country.flag" :alt="country.name" />
        </div>
        <div class="flex column info-container">
          <div class="details-info-country-name">{{country.name}}</div>
          <div class="flex column info-subcontainer">
            <div class="left-subcontainer">
              <div class="info-field">
                <span>Native Name:</span>
                {{country.nativeName}}
              </div>
              <div class="info-field">
                <span>Population:</span>
                {{country.population | localizeNumber}}
              </div>
              <div class="info-field">
                <span>Region:</span>
                {{country.region}}
              </div>
              <div class="info-field">
                <span>Sub Region:</span>
                {{country.subregion}}
              </div>
              <div class="info-field">
                <span>Capital:</span>
                {{country.capital}}
              </div>
            </div>
            <div class="flex info-field">
              <span>Top Level Domain:</span>
              <div v-for="domain in country.topLevelDomain" :key="domain">{{domain}}</div>
            </div>
            <div class="flex info-field">
              <span>Currencies:</span>
              <div v-for="currency in country.currencies" :key="currency.name">{{currency.name}}</div>
            </div>
            <div class="flex info-field">
              <span>Languages:</span>
              <div v-for="language in country.languages" :key="language.name">{{language.name}}</div>
            </div>
          </div>
          <div v-if="this.countryBorders.length !== 0" class="flex border-countries-container">
            <div class="category-name">Border Countries:</div>
            <router-link
              v-for="borderCountry in this.countryBorders"
              :key="borderCountry | getBorderCountryName"
              :to="`/${borderCountry[0].name}`"
              class="border-country-button"
              :class="{borderCountrybtnDarkMode: isDarkModeOn}"
            >
              <div>{{borderCountry | getBorderCountryName}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import CountryService from '../services/CountryService';

export default {
  props: {
    isDarkModeOn: {
      isRequired: true
    }
  },
  data() {
    return {
      country: null,
      countryBorders: []
    };
  },
  methods: {
    async getCountry() {
      const countryName = this.$route.params.name;
      const country = await CountryService.getCountryByName(countryName);
      this.country = country[0];
    },
    goBack() {
      this.$router.push('/');
    },
    getCountryBorders() {
      if (this.countryBorders.length !== 0) this.countryBorders = [];
      this.country.borders.map(async countryCode => {
        const countryName = await CountryService.getCountryByCode(countryCode)
        this.countryBorders.push(countryName);
      })
    }
  },
  async created() {
    await this.getCountry();
    this.getCountryBorders();
  },
  watch: {
    async $route() {
      await this.getCountry();
      this.getCountryBorders();
    }
  }
};
</script>

<style>
</style>