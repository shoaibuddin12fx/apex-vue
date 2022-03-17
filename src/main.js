import { createApp } from 'vue'
window.Vue = require('vue').default;


require("./components");
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
<<<<<<< HEAD
import inputValues from '@/components/input-values/input-values'
=======
import mitt from 'mitt';
const emitter = mitt();
>>>>>>> 6eef37556b6563526e282f5eb4d9022e13da726d


const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
app.use(VueApexCharts);
app.use(inputValues);


