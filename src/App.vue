<template>
  <div id="app">
    <ListarRegistros />
  </div>
</template>

<script>
import ListarRegistros from './views/ListarRegistros.vue'

export default {
  name: 'App',
  components: {
    ListarRegistros
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
