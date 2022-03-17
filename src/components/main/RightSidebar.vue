<template>
  <div class="sidebar">
    <div class="option-width">
      <chart-annotations></chart-annotations>
      <chart-options></chart-options>
      <chart-theme></chart-theme>
      <chart-tool-tip></chart-tool-tip>
      <chart-x-axis></chart-x-axis>
      <chart-y-axis></chart-y-axis>
      <chart-data-labels></chart-data-labels>
      <chart-grid></chart-grid>
      <chart-labels></chart-labels>
      <chart-legend></chart-legend>
    </div>
    <div class="option-width">
      <chart-makers></chart-makers>
      <chart-no-data></chart-no-data>
      <chart-fill-options></chart-fill-options>
      <chart-plot-options></chart-plot-options>
      <chart-forecast-data-points></chart-forecast-data-points>
      <chart-title></chart-title>
      <chart-responsive></chart-responsive>
      <chart-series></chart-series>
      <chart-strokes></chart-strokes>
      <chart-subtitle></chart-subtitle>
      <chart-markers></chart-markers>
    </div>
    <!-- <ul>
      <li class="headings">Chart Options</li>
      <div class="sub-headings">Chart Types</div>
      <select v-model="val.chart.type">
        <option v-for="type of types" :key="type">{{ type }}</option>
      </select>
      <div class="sub-headings">Background Color</div>
      <input type="color" name="height" v-model="val.chart.background" /><br />
      <div class="sub-headings">Text Color</div>
      <input type="color" name="height" v-model="val.chart.foreColor" /><br />
      <div class="sub-headings">Chart Title</div>
      <input type="text" name="height" v-model="val.title.text" /><br />
      <div class="sub-headings">Chart Title > color</div>
      <input type="color" name="height" v-model="val.title.style.color" /><br />
      <div class="sub-headings">Chart Stroke Curve</div>
      <select v-model="val.stroke.curve">
        <option v-for="stroke of strokes" :key="stroke">{{ stroke }}</option>
      </select>

      <br />
      <button @click="sendPush($event)">Save</button>
    </ul> -->
  </div>
</template>
<script>
import ChartAnnotations from "../options/annotations.vue";
import ChartOptions from "../options/chart.vue";
import ChartTheme from "../options/charttheme.vue";
import ChartToolTip from "../options/charttooltip.vue";
import ChartXAxis from "../options/chartxaxis.vue";
import ChartYAxis from "../options/chartyaxis.vue";
import ChartDataLabels from "../options/datalabels.vue";
import ChartGrid from "../options/grid.vue";
import ChartLabels from "../options/labels.vue";
import ChartLegend from "../options/legend.vue";
import ChartMarkers from "../options/markers.vue";
import ChartNoData from "../options/noData.vue";
import ChartFillOptions from "../options/chartfill.vue";
import ChartPlotOptions from "../options/plotOptions.vue";
import ChartForecastDataPoints from "../options/chartforecastdatapoints.vue";
import ChartTitle from "../options/chartitle.vue";
import ChartResponsive from "../options/chartresponsive.vue";
import ChartSeries from "../options/chartseries.vue";
import ChartStrokes from "../options/chartstroke.vue";
import ChartSubtitle from "../options/chartsubtitle.vue";

export default {
  name: "RightSidebar",
  components: {
    ChartAnnotations,
    ChartOptions,
    ChartTheme,
    ChartToolTip,
    ChartXAxis,
    ChartYAxis,
    ChartDataLabels,
    ChartGrid,
    ChartLabels,
    ChartLegend,
    ChartMarkers,
    ChartNoData,
    ChartFillOptions,
    ChartPlotOptions,
    ChartForecastDataPoints,
    ChartTitle,
    ChartResponsive,
    ChartSeries,
    ChartStrokes,
    ChartSubtitle,
  },
  data() {
    return {};
  },
  methods: {
    sendPush() {
      console.log(this.val);

      this.emitter.emit("apex-obj", this.val);
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
.headings {
  margin-bottom: 20px;
}
select,
input {
  margin-bottom: 20px;
}
.sub-headings {
  margin-bottom: 10px;
}
.sidebar {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.option-width {
  width: 50%;
}
</style>
