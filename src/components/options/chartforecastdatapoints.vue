<template>
  <div class="forecastDataPoints">
    <div class="accordion-background" @click="toggleHide()">
      <h4>Forecast Data Points</h4>
    </div>
    <ul class="StyledList" v-if="!optionsHidden">
      <li class="styledListItem">Position</li>
      <li class="styledListItem">Y axis</li>
      <li class="styledListItem">X axis</li>
      <li class="styledListItem">Points</li>
      <li class="styledListItem">Texts</li>
      <li class="styledListItem">Images</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChartForecastDataPoints",
  data() {
    return {
      optionsHidden: true,
    };
  },
  methods: {
    toggleHide() {
      this.optionsHidden = !this.optionsHidden;
    },
  },
};
</script>

<style>
</style>