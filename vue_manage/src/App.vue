<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios  from 'axios'
export default {
  name: 'App',
  components: {
  },
  mounted() {
    // axios.get('http://localhost:8080/api1/hello')
  }
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
