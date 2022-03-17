<template>
  <h1>Chart</h1>
  <div class="container">
    <apexchart
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
    <inputValues
      @changeTitle="ChangeT($event)"
      :parentData="myData"
      v-on:childToParent="onChildClick"
    />
    <div style="color: white">{{someData}}</div>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import inputValues from "@/components/input-values/input-values";
export default {
    name: "ApexChart",
  components: {
    apexchart: VueApexCharts,
    inputValues,
  },
  data: function () {
    return {
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
      counter: 0,
      fromChild: '',
    }
  },
methods:{
    ChangeT(title)
    {
      this.title=title;
      console.log(this.title);
      this.series[0].data.push(this.title)
    },
  },
      something: function(){
      // you can access the parent's data
      console.log(this.someData);
      this.series[0].data.push(this.someData)
    },
     props: ['some-data']
}
</script>
<style scoped>
h1 {
  color: white;
}
input {
  height: 20px;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
