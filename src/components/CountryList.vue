<template>
  <section>
      <div v-if="countries" class="countries-container" :class="{darkMode: isDarkModeOn}">
          <CountryPreview v-for="country in countries" :key="country.name" :country="country" :isDarkModeOn="isDarkModeOn"/>
      </div>
  </section>
</template>

<script>

import CountryPreview from './CountryPreview';

export default {
    props: ["countries","isDarkModeOn"],
    components: {
        CountryPreview
    }
};
</script>