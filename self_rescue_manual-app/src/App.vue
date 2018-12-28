<template>
  <div id="app">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/style.scss';
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
