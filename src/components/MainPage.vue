<template>
  <div class="outer-layout">
    <div class="outer-header"></div>
    <div class="outer-header">
      Grafana Play Home / Edit Panel
      <top-header-component
        :headerToolbarOptions="headerToolbarOptions"
      ></top-header-component>
    </div>
    <div class="outer-body">
      <div class="section-1">
        <ApexChart :some-data="someData" />
      </div>
      <div class="section-2">
        <inputValues
          @changeTitle="ChangeT($event)"
          :parentData="myData"
          v-on:childToParent="onChildClick"
        ></inputValues>
        <RightSidebar />
      </div>
    </div>
  </div>
</template>

<script>
import ApexChart from "./main/ApexChart.vue";
import inputValues from "../components/input-values/input-values.vue";
import RightSidebar from './main/RightSidebar.vue';
import TopHeaderComponent from "../components/header/TopHeaderComponent.vue";
export default {
  name: "MainPage",
  data() {
    return {
     someData: "parent's data"
    }
  },
  components: {
    ApexChart,
    inputValues,
    RightSidebar,
    TopHeaderComponent,
  },
  // data() {
  //   return {
  //     headerToolbarOptions: undefined,
  //   };
  // },
  mounted() {
    this.emitter.on("sendValuesToMain", (value) => {
      this.headerToolbarOptions = value.toolbarOptions;
      // this.emitter.emit("passValuesToHeaderToolbar", {
      //   headerToolbarOptions: this.headerToolbarOptions,
      // });
      console.log("values recieved", this.headerToolbarOptions);
    });
  },

methods:{
    ChangeT(title)
    {
      this.title=title;
      console.log(this.title);
      this.someData = this.title
    },
  }


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
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
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
.section-2 {
  height: 100%;
  width: 19%;
  border-right: 1px solid rgb(38, 54, 204);
}
</style>
