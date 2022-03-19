import { createApp } from 'vue'
window.Vue = require('vue').default;


require("./components");
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import mitt from 'mitt';
const emitter = mitt();


const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
app.use(VueApexCharts);
// app.use(inputValues);


