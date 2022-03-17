import { createApp } from 'vue'
window.Vue = require('vue').default;

require("./components");
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import inputValues from '@/components/input-values/input-values'


const app = createApp(App);
app.mount('#app');
app.use(VueApexCharts);
app.use(inputValues);

