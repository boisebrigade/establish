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
  import {createClient} from '../plugins/contentful.js'
  const client = createClient()

  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: components,
    mounted(){
      client.getContentType('category')
      .then(categories => {
        this.$store.state.categories = categories
      })
      .catch(console.error)
      client.getContentType('resource')
      .then(resources => {
        this.$store.state.resources = resources
      })
      .catch(console.error)
    },
  }
</script>
