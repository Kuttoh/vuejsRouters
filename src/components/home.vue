<template>
  <div class="home">

    <h2>Home</h2>
    <button @click="show = true">Load Message</button>
    <div v-if="show">
      <message></message>
    </div>


  </div>
</template>

<script>

  export default {
    name: 'home',
    data: () => ({ show: false }),
    // data () {
    //   return {
    //     msg: 'Welcome to Your Vue.js App',
    //
    //   }
    components: {
      message: () => import('./message')
    }

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  text-align: center;
}
</style>
