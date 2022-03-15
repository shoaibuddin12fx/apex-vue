<template>
  <div class="sidebar">
    
    













  </div>
</template>
<script>
export default {
  name: "RightSidebar",
  data() {
    return {
      options: {
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
          
        },
      },
      types: [
        "line",
        "area",
        "bar",
        "radar",
        "histogram",
        "pie",
        "donut",
        "radialBar",
        "scatter",
        "bubble",
        "heatmap",
      ],
      key: "box",
    };
  },
  methods: {
    sendPush() {
      this.emitter.emit("apex-obj", {
        key: "value",
      });
    },
    updateChartType($event) {
      let v = $event.target.value;
      if (v) {
        this.emitter.emit("apex-type-change", {
          type: v,
        });
      }
    },
  },
};
</script>
<style scoped>
</style>
