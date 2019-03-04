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
      client.getEntries()
      .then(response => {
        response.items.forEach(item => {
            item.fields.icon ? this.$store.state.categories.push(item) : this.$store.state.resources.push(item)
        })
        console.log(response.items)
      })
      .catch(console.error)
    }
  }
</script>
