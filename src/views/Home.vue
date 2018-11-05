<template>
  <div id="home">
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


<script>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import CategoryHeader from '@/components/CategoryHeader.vue'
import Categories from '@/components/Categories.vue'
import Directory from '@/components/Directory.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Hero,
    CategoryHeader,
    Categories,
    Directory,
    Footer
  }
}
</script>
