<template>
  <div class="sidebar">
    <ul>
      <li class="headings">Chart Options</li>
      <div class="sub-headings">Chart Types</div>
      <select v-model="val.chart.type">
        <option v-for="type of types" :key="type">{{ type }}</option>
      </select>
      <div class="sub-headings">Background Color</div>
      <input type="color" name="height" v-model="val.chart.background" /><br />
      <div class="sub-headings">Text Color</div>
      <input type="color" name="height" v-model="val.chart.foreColor" /><br />
      <div class="sub-headings">Chart Title </div>
      <input type="text" name="height" v-model="val.title.text" /><br />
      <div class="sub-headings">Chart Title > color</div>
      <input type="color" name="height" v-model="val.title.style.color" /><br />
      <div class="sub-headings">Chart Stroke Curve</div>
      <select v-model="val.stroke.curve">
        <option v-for="stroke of strokes" :key="stroke">{{ stroke }}</option>
      </select>

      <br />
      <button @click="sendPush($event)">Save</button>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RightSidebar",
  data() {
    return {
      val: {
        title: {
          text: 'Charts',
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          },
        },
        stroke: {
          curve: 'smooth'
        },
        chart: {
          type: "line",
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
        "candlestick",
      ],
      strokes: [
        'smooth', 'straight', 'stepline'
      ],
      key: "box",
    };
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
select, input{
  margin-bottom: 20px;
}
.sub-headings{
  margin-bottom: 10px;
}
</style>
