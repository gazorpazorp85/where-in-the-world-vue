<template>
  <div class="home" :class="{darkMode: isDarkModeOn}">
    <div class="main-container">
      <CountryFilter @filterCountries="onFilterCountries" :isDarkModeOn="isDarkModeOn" />
      <CountryList :countries="countriesToShow" :isDarkModeOn="isDarkModeOn"/>
    </div>
  </div>
</template>

<script>

import CountryList from '../components/CountryList';
import CountryFilter from '../components/CountryFilter';

import CountryService from '../services/CountryService';

export default {
  props: {
    isDarkModeOn: {
      isRequired: true
    }
  },
  data() {
    return {
      countries: [],
      filterBy: { name: '', region: '' }
    }
  },
  components: {
    CountryList,
    CountryFilter
  },
  computed: {
    countriesToShow() {
      const lowerCaseFilterName = this.filterBy.name.toLowerCase();
      const lowerCaseRegionName = this.filterBy.region.toLowerCase();
      return this.countries.filter(country =>
        country.name.toLowerCase().includes(lowerCaseFilterName) &&
        country.region.toLowerCase().includes(lowerCaseRegionName)
      )
    }
  },
  async created() {
    this.countries = await CountryService.query();
  },
  methods: {
    onFilterCountries(filterBy) {
      this.filterBy = filterBy;
    }
  }
}
</script>
