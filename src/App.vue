<template>
  <div id="app">
    <Header />
    <Hero />
    <CategoryHeader />
    <Categories />
    <Directory />
    <Entries />
    <Footer />
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

<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import CategoryHeader from '@/components/CategoryHeader.vue'
import Directory from '@/components/Directory.vue'
import Footer from '@/components/Footer.vue'
import Entries from '@/components/Entries.vue'
import Categories from '@/components/Categories.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Header,
    Hero,
    CategoryHeader,
    Directory,
    Footer,
    Entries,
    Categories
  }
}
</script>
