<template>
  <div class="nav-bar-border" :class="{ navBarDarkMode: isDarkModeOn }">
    <div class="main-container nav-bar">
      <div class="title">Where in the world?</div>
      <div
        class="capitalize pointer dark-mode-btn"
        :class="{ light: isDarkModeOn }"
        @click="this.setMode"
      >
        {{ getButtonTxt }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    isDarkModeOn() {
      return this.$store.getters.darkMode;
    },
    getButtonTxt() {
      return (this.isDarkModeOn) ? 'light mode' : 'dark mode';
    }
  },
  methods: {
    setMode() {
      this.$store.commit({ type: 'setDarkMode'});
    }
  },
}
</script>