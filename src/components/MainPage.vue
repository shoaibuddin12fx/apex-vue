<template>
  <div class="outer-layout">
    <div class="outer-header">
      Grafana Play Home / Edit Panel
      <top-header-component
        :headerToolbarOptions="headerToolbarOptions"
      ></top-header-component>
    </div>
    <div class="outer-body">
      <div class="section-1">
        <ApexChart />
      </div>
      <div class="section-2">
        <RightSidebar />
      </div>
    </div>
  </div>
</template>

<script>
import ApexChart from "./main/ApexChart.vue";
import RightSidebar from "./main/RightSidebar.vue";
import TopHeaderComponent from "../components/header/TopHeaderComponent.vue";
export default {
  name: "MainPage",
  components: {
    ApexChart,
    RightSidebar,
    TopHeaderComponent,
  },
  data() {
    return {
      headerToolbarOptions: undefined,
    };
  },
  mounted() {
    this.emitter.on("sendValuesToMain", (value) => {
      this.headerToolbarOptions = value.toolbarOptions;
      // this.emitter.emit("passValuesToHeaderToolbar", {
      //   headerToolbarOptions: this.headerToolbarOptions,
      // });
      console.log("values recieved", this.headerToolbarOptions);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-layout {
  /* background: black; */
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
.outer-header {
  height: 80px;
  color: white;
  font-size: 28px;
  margin: 20px;
  border-bottom: 1px solid white;
}
.outer-body {
  height: 100%;
  display: flex;
}
.section-1 {
  height: 100%;
  width: 70%;
  /* width: 70%; */
  /* float: left; */
  border-right: 1px solid white;
}
.section-2 {
  height: 100%;
  width: 30%;
  /* width: 30%; */
  /* float: right; */
  color: white;
  border-right: 1px solid white;
}
</style>
