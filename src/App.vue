<template>
  <div id="app">
    <NavBar @darkModeOn="setDarkMode" @scrollToTop="scrollToTop"/>
    <router-view :isDarkModeOn="this.isDarkModeOn" />
  </div>
</template>

<script>

import NavBar from '@/components/NavBar';

export default {
  data() {
    return {
      isDarkModeOn: null
    }
  },
  components: {
    NavBar
  },
  methods: {
    setDarkMode(darkModeOn) {
      this.isDarkModeOn = darkModeOn;
    },
    scrollToTop() {
      console.log('here');
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.isDarkModeOn = JSON.parse(localStorage.getItem('darkMode')) || false;
  }
}
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>