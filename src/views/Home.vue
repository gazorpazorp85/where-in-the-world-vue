<template>
  <div class="home">
    <div class="main-container">
      <CountryFilter @filterCountries="onFilterCountries" />
      <CountryList :countries="countriesToShow" />
    </div>
  </div>
</template>

<script>

import CountryList from '../components/CountryList';
import CountryFilter from '../components/CountryFilter';

import CountryService from '../services/CountryService';

export default {
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
