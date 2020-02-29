<template>
  <section>
      <div v-if="countries" class="countries-container">
          <CountryPreview v-for="country in countries" :key="country.name" :country="country"/>
      </div>
  </section>
</template>

<script>

import CountryPreview from './CountryPreview';

export default {
    props: ["countries"],
    components: {
        CountryPreview
    }
};
</script>