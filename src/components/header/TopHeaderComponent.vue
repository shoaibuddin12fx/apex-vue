<template>
  <div class="container"></div>
</template>
<script>
// import {EventBus} from "../../eventbus";

export default {
  props: ["headerToolbarOptions"],
  mounted() {
    console.log("got options", this.headerToolbarOptions);
    // this.emitter.on("passValuesToHeaderToolbar", (val) => {
    //   this.headerToolbarOptions = val.headerToolbarOptions;
    //   console.log("Toolbar options are here", this.headerToolbarOptions);
    // });
  },

  watch: {
    headerToolbarOptions(newValue, oldValue) {
      console.log("old value", oldValue);
      console.log("new value", newValue);
    },
  },
};
</script>


<style>
.container {
  width: 100%;
}
/* @import "TopHeaderComponent.css"; */
</style>
