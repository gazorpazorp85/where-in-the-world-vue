<template>
  <div>
    <select @input="onSetRegionFilter">
      <option v-for="option in options" :value="option" :key="option" :selected="option === value">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
    props: {
        options: {
            type: Array,
            required: true
        }
    }
}
</script>