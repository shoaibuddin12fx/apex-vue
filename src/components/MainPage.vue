<template>
  <div class="outer-layout">
<<<<<<< HEAD
    <div class="outer-header"></div>
=======
    <div class="outer-header">
      Grafana Play Home / Edit Panel
    </div>
>>>>>>> 6eef37556b6563526e282f5eb4d9022e13da726d
    <div class="outer-body">
      <div class="section-1">
        <ApexChart :some-data="someData" />
      </div>
      <div class="section-2">
<<<<<<< HEAD
        <inputValues
          @changeTitle="ChangeT($event)"
          :parentData="myData"
          v-on:childToParent="onChildClick"
        />
=======
        <RightSidebar />
>>>>>>> 6eef37556b6563526e282f5eb4d9022e13da726d
      </div>
    </div>
  </div>
</template>

<script>
import ApexChart from "./main/ApexChart.vue";
import inputValues from "@/components/input-values/input-values";

<<<<<<< HEAD
=======
import ApexChart from './main/ApexChart.vue';
import RightSidebar from './main/RightSidebar.vue';
>>>>>>> 6eef37556b6563526e282f5eb4d9022e13da726d
export default {
  name: "MainPage",
  data() {
    return {
     someData: "parent's data"
    }
  },
  components: {
    ApexChart,
<<<<<<< HEAD
    inputValues
=======
    RightSidebar
>>>>>>> 6eef37556b6563526e282f5eb4d9022e13da726d
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
<<<<<<< HEAD
.outer-body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
=======
.outer-body{
  height: 100%;  
  display: flex;
>>>>>>> 6eef37556b6563526e282f5eb4d9022e13da726d
}
.section-1 {
  height: 100%;
  width: 70%;
  /* width: 70%; */
  /* float: left; */
  border-right: 1px solid white;
}
.section-2{
  height: 100%;
  width: 30%;
  /* width: 30%; */
  /* float: right; */
  color: white;
  border-right: 1px solid white;
<<<<<<< HEAD
}
.section-2 {
  height: 100%;
  width: 19%;
  border-right: 1px solid rgb(38, 54, 204);
=======
>>>>>>> 6eef37556b6563526e282f5eb4d9022e13da726d
}
</style>
