<template>
  <div class="nav-bar-border" :class="{ navBarDarkMode: isDarkModeOn }">
    <div class="main-container nav-bar">
      <div class="title">Where in the world?</div>
      <div class="capitalize pointer dark-mode-container" @click="this.setMode">
        <span v-if="!isDarkModeOn" class="img-container"
          ><img src="../assets/img/moon-4-16.png"
        /></span>
        <span v-else class="img-container"
          ><img src="../assets/img/sun-16.png"
        /></span>
        <span>{{ getButtonTxt }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isDarkModeOn: null
    };
  },
  computed: {
    getButtonTxt() {
      return (this.isDarkModeOn) ? 'light mode' : 'dark mode';
    }
  },
  methods: {
    setMode() {
      this.isDarkModeOn = !this.isDarkModeOn;
      this.$emit("darkModeOn", this.isDarkModeOn);
      localStorage.setItem('darkMode', this.isDarkModeOn);
    }
  },
  created() {
    this.isDarkModeOn = JSON.parse(localStorage.getItem('darkMode')) || false;
  }
}
</script>