<template>
  <div class="annotations">
    <div class="accordion-background" @click="sendValuesToMainToolbar()">
      <h4>Annotations</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartAnnotations",
  data() {
    return {
      optionsHidden: true,
      annotations: require("../../assets/data/annotations.json"),
    };
  },
  methods: {
    sendValuesToMainToolbar() {
      this.emitter.emit("sendValuesToMain", {
        toolbarOptions: this.annotations,
      });
    },
  },
};
</script>

<style>
@import "@/styles/global.css";
</style>