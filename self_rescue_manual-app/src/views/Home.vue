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
        console.log(response)
        response.items.forEach(item => {
            if (item.fields.resource) {
              this.$store.state.resources.push(item)
            } else if (item.fields.icon) {
              this.$store.state.categories.push(item)
            } else if (item.fields.county) {
              this.$store.state.counties.push(item)
            } else {console.log(item)}
          })
          .catch(console.error)
      })
    }
  }
</script>
