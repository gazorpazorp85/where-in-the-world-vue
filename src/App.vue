<template>
  <div id="app">
    <NavBar @darkModeOn="setDarkMode"/>
    <router-view :isDarkModeOn="this.isDarkModeOn"/>
  </div>
</template>

<script>

import NavBar from './components/NavBar';

export default {
  data() {
    return {
      isDarkModeOn: false
    }
  },
  components: {
    NavBar
  },
  methods: {
    setDarkMode(darkModeOn) {
      this.isDarkModeOn = darkModeOn;
    }
  }
}
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
