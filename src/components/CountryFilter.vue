<template>
  <div class="filter-container">
    <input
      type="text"
      id="txt-filter"
      placeholder="Search for a country..."
      @input="onFilter"
      v-model="filterBy.name"
    />
    <div class="region-filter-container">
      <div @click.self="onToggleRegionFilter" class="pointer region-filter-select-container">
        {{filterRegionInput}}
        <div v-if="this.toggleRegionFilter" id="region-filter">
          <div @click="onSetRegionFilter($event)" class="filter-option">Show All</div>
          <div @click="onSetRegionFilter($event)" class="filter-option">Africa</div>
          <div @click="onSetRegionFilter($event)" class="filter-option">America</div>
          <div @click="onSetRegionFilter($event)" class="filter-option">Asia</div>
          <div @click="onSetRegionFilter($event)" class="filter-option">Europe</div>
          <div @click="onSetRegionFilter($event)" class="filter-option">Oceania</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { name: '', region: '' },
      toggleRegionFilter: false
    };
  },
  computed: {
    filterRegionInput() {
      return (this.filterBy.region === '') ? 'Filter by Region' : this.filterBy.region;
    }
  },
  methods: {
    onFilter() {
      this.$emit("filterCountries", this.filterBy);
    },
    onToggleRegionFilter() {
      return this.toggleRegionFilter = !this.toggleRegionFilter;
    },
    onSetRegionFilter(event) {
      const value = (event.target.textContent === 'Show All') ? '' : event.target.textContent;
      this.filterBy.region = value;
      this.onFilter();
      this.toggleRegionFilter = !this.toggleRegionFilter;
    }
  }
};
</script>

<style>
</style>