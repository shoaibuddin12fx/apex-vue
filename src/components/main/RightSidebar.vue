<template>
  <div class="sidebar">
    <form action="/action_page.php">
      <div class=""></div>

      <label for="height">Height:</label><br />
      <input type="text" name="height" v-model="val.chart.height" /><br />
      <label for="offsetX">offsetX:</label><br />
      <input
        type="text"
        id="offsetX"
        name="offsetX"
        v-model="val.chart.offsetX"
      /><br /><br />
      <button @click="sendPush()">Save</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "RightSidebar",
  data() {
    return {
      val: {
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
          background: "#fff",
          brush: {
            enabled: false,
            target: undefined,
            autoScaleYaxis: false,
          },
          defaultLocale: "en",
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
          fontFamily: "Helvetica, Arial, sans-serif",
          foreColor: "#373d3f",
          group: undefined,
          events: {
            animationEnd: undefined,
            beforeMount: undefined,
            mounted: undefined,
            updated: undefined,
            mouseMove: undefined,
            mouseLeave: undefined,
            click: undefined,
            legendClick: undefined,
            markerClick: undefined,
            selection: undefined,
            dataPointSelection: undefined,
            dataPointMouseEnter: undefined,
            dataPointMouseLeave: undefined,
            beforeZoom: undefined,
            beforeResetZoom: undefined,
            zoomed: undefined,
            scrolled: undefined,
          },
          height: "",
          id: undefined,
          locales: [
            {
              name: "en",
              options: {
                months: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                shortMonths: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                days: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                toolbar: {
                  download: "Download SVG",
                  selection: "Selection",
                  selectionZoom: "Selection Zoom",
                  zoomIn: "Zoom In",
                  zoomOut: "Zoom Out",
                  pan: "Panning",
                  reset: "Reset Zoom",
                },
              },
            },
          ],
          offsetX: 0,
          offsetY: 0,
          parentHeightOffset: 15,
          redrawOnParentResize: true,
          redrawOnWindowResize: true,
          selection: {
            enabled: true,
            type: "x",
            fill: {
              color: "#24292e",
              opacity: 0.1,
            },
            stroke: {
              width: 1,
              dashArray: 3,
              color: "#24292e",
              opacity: 0.4,
            },
            xaxis: {
              min: undefined,
              max: undefined,
            },
            yaxis: {
              min: undefined,
              max: undefined,
            },
          },
          sparkline: {
            enabled: false,
          },
          stacked: false,
          stackType: "normal",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ",",
                headerCategory: "category",
                headerValue: "value",
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString();
                },
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              },
            },
            autoSelected: "zoom",
          },
          type: "line",
          width: "100%",
          zoom: {
            enabled: true,
            type: "x",
            autoScaleYaxis: false,
            zoomedArea: {
              fill: {
                color: "#90CAF9",
                opacity: 0.4,
              },
              stroke: {
                color: "#0D47A1",
                opacity: 0.4,
                width: 1,
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
          "candlestick",
        ],
      },
      key: "box",
    };
  },
  methods: {
    sendPush() {
      this.emitter.emit("apex-obj", {
        options: this.val,
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
