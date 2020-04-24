<template>
  <section>
    <div class="countries-container" :class="{ darkMode: isDarkModeOn }">
      <CountryPreview
        v-for="country in countries"
        :key="country.name"
        :country="country"
        :isDarkModeOn="isDarkModeOn"
      />
    </div>
  </section>
</template>

<script>

import CountryPreview from './CountryPreview';

export default {
  props: {
    isDarkModeOn: {
      required: true
    },
    countries: {
      type: Array,
      required: true
    }
  },
  components: {
    CountryPreview
  }
};
</script>