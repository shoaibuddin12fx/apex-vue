<template>
  <div class="annotations">
    <div class="accordion-background" @click="toggleHide()">
      <h4>Grid</h4>
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
  name: "ChartGrid",
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
@import "@/styles/global.css";
</style>