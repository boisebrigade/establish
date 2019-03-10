<template>
  <div id="Categories" class="container">
    <ul v-if="categories && categories.length" class="list-widgets">
      <li v-for="(category, idx) in categories" :key="idx">
        <a href="#" class="widget" v-on:click="listEntries(category.fields.title)" v-scroll-to="'#results'">
          <figure class="widget__image">
            <img :src=category.fields.icon.fields.file.url width="90" height="90" />
          </figure><!-- /.widget__image -->
          <h5 class="widget__title">
            {{category.fields.title}}
          </h5>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: this.$store.state.categories
    }
  }
}
</script>
