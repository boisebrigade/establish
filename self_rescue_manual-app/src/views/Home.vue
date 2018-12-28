<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <Hero />
      <CategoryHeader />
      <Categories />
      <Directory />
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
<script>
  import components from '../components/home/'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: components
  }
</script>
