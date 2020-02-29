<template>
  <div class="nav-bar-border">
    <div class="main-container nav-bar">
      <div class="title">Where in the world?</div>
      <div class="capitalize pointer" @click="this.setMode">{{getButtonTxt}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkModeOn: false
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
    }
  }
}
</script>