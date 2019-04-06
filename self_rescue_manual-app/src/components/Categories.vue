<template>
  <div id="Categories" class="container">
    <ul v-if="categories && categories.length" class="list-widgets">
      <li v-for="(category, idx) in categories" :key="idx">
        <a href="#" class="widget" v-on:click="listEntries(category.fields.title)" v-scroll-to="'#results'">
          <figure class="widget__image">
            <img :src=category.fields.icon width="90" height="90" />
          </figure>
          <h5 class="widget__title">
            {{category.fields.title}}
          </h5>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  const spaceID = process.env.VUE_APP_SPACE_ID
  const accessToken = process.env.VUE_APP_ACCESS_TOKEN

  export default {
    data() {
      return {
        categories: [],
      }
    },
      mounted(){
        axios.get(`https://cdn.contentful.com/spaces/${spaceID}/entries/?content_type=category&access_token=${accessToken}`)
          .then(response => {this.categories = response.data.items})
          .then(() => {console.log('categories', this.categories)})
          .catch(e => {this.errors.push(e)})
      }
  }
</script>
