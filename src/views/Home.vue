<template>
  <div class="home">
    <!-- <HelloWorld /> -->
    <Hero />
    <CategoryGrid />
    <Directory />
    <Footer />
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/components/Hero.vue'
import CategoryGrid from '@/components/CategoryGrid.vue'
import Directory from '@/components/Directory.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Hero,
    CategoryGrid,
    Directory,
    Footer
  }
}
</script>
