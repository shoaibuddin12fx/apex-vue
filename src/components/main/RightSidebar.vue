<template>
    <div class="sidebar">
        <h1>Hello</h1>
        <select @change="updateChartType($event)" >
            <option v-for="type of types" :key="type">{{type}}</option>
        </select>
        <button @click="sendPush()">PRESS</button>
    </div>
</template>
<script>

export default {
    name: 'RightSidebar',
    data() {
        return {
            types: [
                'line',
                'area',
                'bar',
                'radar',
                'histogram',
                'pie',
                'donut',
                'radialBar',
                'scatter',
                'bubble',
                'heatmap',
                'candlestick',
            ],
            key: "box"
        }
    },
    methods: {
        sendPush(){
            this.emitter.emit("apex-obj", {
                key: "value"
            });
        },
        updateChartType($event){
            let v = $event.target.value;
            if(v){
                this.emitter.emit("apex-type-change", {
                    type: v
                });
            }
            
        }
    }
}
</script>
<style scoped>

</style>
