<template>
<!-- <input type="text" placeholder="Enter Value"/> -->
  <div class="child">
      <input type="number" v-model="num" />
    <button type="button" @click='passEvent'> Update me</button>
  </div>
</template>




<script>
export default {
  data() {
    return {
      childMessage: '',
      num: ''
    }
  },
  name: 'inputValues',
  methods:{
    passEvent()
    {
      this.$emit('changeTitle',this.num)
    }
  }
}
</script>
<style scoped>
</style>
