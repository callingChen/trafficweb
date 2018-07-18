<template>
  <div id="app">
    <LoginForm></LoginForm>
    <router-view/>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'
export default {
  name: 'App',
  components: {
    'LoginForm': LoginForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
