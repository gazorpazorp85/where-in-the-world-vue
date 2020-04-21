<template>
  <div class="home" :class="{ darkMode: isDarkModeOn }">
    <div v-if="countries" class="main-container home-subcontainer">
      <CountryFilter
        @filterCountries="onFilterCountries"
        :isDarkModeOn="isDarkModeOn"
      />
      <CountryList :countries="countriesToShow" :isDarkModeOn="isDarkModeOn" />
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import CountryList from '@/components/CountryList';
import CountryFilter from '@/components/CountryFilter';

export default {
  props: {
    isDarkModeOn: {
      required: true
    }
  },
  data() {
    return {
      filterBy: { name: '', region: '' }
    }
  },
  components: {
    CountryList,
    CountryFilter
  },
  computed: {
    ...mapState({ countries: state => state.country.countries }),
    countriesToShow() {
      const lowerCaseFilterName = this.filterBy.name.toLowerCase();
      const lowerCaseRegionName = this.filterBy.region.toLowerCase();
      return this.countries.filter(country =>
        country.name.toLowerCase().includes(lowerCaseFilterName) &&
        country.region.toLowerCase().includes(lowerCaseRegionName)
      )
    }
  },
  created() {
    this.$store.dispatch('getCountries');
  },
  methods: {
    onFilterCountries(filterBy) {
      this.filterBy = filterBy;
    }
  }
}
</script>
