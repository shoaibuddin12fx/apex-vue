<template>
  
  <apexchart
    width="800"
    :type="type"
    :options="options"
    :series="series"
  ></apexchart>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "ApexChart",
  components: {
    apexchart: VueApexCharts,
  },
  mounted() {
    this.emitter.on("apex-obj", (value) => {
      console.log(value);
      const unwrapped = { ...value }
      this.options = unwrapped;
    });
    this.emitter.on("apex-type-change", (obj) => {
      this.type = obj.type;
    });
  },
  data: function () {
    return {
      type: "bar",
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  color: white;
}
</style>
