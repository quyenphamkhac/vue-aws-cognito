<template>
  <div id="app">
    <header>
      <nav />
      <router-link to="/" exact>Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/sign-up">Sign-up</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
