<template>
  <div class="home" @scroll="handleScroll" :class="{ darkMode: isDarkModeOn }">
    <div
      class="main-container home-subcontainer"
      :class="{ darkMode: isDarkModeOn }"
      id="top"
    >
      <CountryFilter
        @filterCountries="onFilterCountries"
        :isDarkModeOn="isDarkModeOn"
      />
      <CountryList :countries="countriesToShow" :isDarkModeOn="isDarkModeOn" />
      <button
        href="#"
        v-scroll-to="'#top'"
        class="pointer scroll-to-top-btn"
        :class="{ darkMode: isDarkModeOn, shown: scrollpx > 110 }"
      ></button>
    </div>
  </div>
</template>

<script>

import store from '@/store/store';

import CountryList from '@/components/CountryList';
import CountryFilter from '@/components/CountryFilter';

export default {
  data() {
    return {
      scrollpx: 0
    }
  },
  components: {
    CountryList,
    CountryFilter
  },
  computed: {
    countriesToShow() {
      return this.$store.getters.countriesToShow;
    },
    isDarkModeOn() {
      return this.$store.getters.darkMode;
    },
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    try {
      store.dispatch({ type: 'getCountries' });
      next();
    } catch (error) {
      console.log(error);
      next({ name: 'not-found' });
    }
  },
  methods: {
    onFilterCountries(filterBy) {
      this.$store.commit({ type: 'SET_FILTER', filterBy });
    },
    handleScroll() {
      this.scrollpx = this.$el.scrollTop;
    },
  }
}

</script>