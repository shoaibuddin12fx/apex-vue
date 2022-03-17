<template>
  <div class="outer-layout">
    <div class="outer-header"></div>
    <div class="outer-body">
      <div class="section-1">
        <ApexChart :some-data="someData" />
      </div>
      <div class="section-2">
        <inputValues
          @changeTitle="ChangeT($event)"
          :parentData="myData"
          v-on:childToParent="onChildClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ApexChart from "./main/ApexChart.vue";
import inputValues from "@/components/input-values/input-values";

export default {
  name: "MainPage",
  data() {
    return {
     someData: "parent's data"
    }
  },
  components: {
    ApexChart,
    inputValues
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
  background: black;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
.outer-header {
  height: 80px;
  border-bottom: 1px solid white;
}
.outer-body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}
.section-1 {
  height: 100%;
  width: 80%;
  border-right: 1px solid white;
}
.section-2 {
  height: 100%;
  width: 19%;
  border-right: 1px solid rgb(38, 54, 204);
}
</style>
