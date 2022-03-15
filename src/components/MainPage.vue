<template>
  <div class="outer-layout">
    <div class="outer-header">

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

import ApexChart from './main/ApexChart.vue';
import RightSidebar from './main/RightSidebar.vue';
export default {
  name: "MainPage",
  components: {
    ApexChart,
    RightSidebar
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer-layout {
  background: black;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
.outer-header{
  height: 80px;
  border-bottom: 1px solid white;
}
.outer-body{
  height: 100%;  
  display: flex;
}
.section-1{
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
}
</style>
