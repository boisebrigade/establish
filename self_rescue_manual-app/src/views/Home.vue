<template>
  <div>
    <Header />
    <Hero />
    <CategoryHeader />
    <Categories />
    <Directory />
    <Footer />
  </div>
</template>

<script>
  import components from '../components/'
  export default {
    name: 'home',
    data () {
      return {
        errors:[],
        counties: []
      }
    },
    components: components,

  }
</script>
