<template>
  <div id="Categories">
    <ul v-if="categories && categories.length" class="list-widgets">
      <li v-for="(category, idx) in categories" :key="idx">
        <a href="#" class="widget" v-on:click="listEntries()" v-scroll-to="'#results'">
          <figure class="widget__image">
            <img :src=category.image width="90" height="90" />

          </figure><!-- /.widget__image -->
          <h5 class="widget__title">
            {{category.title}}
          </h5>
        </a>
      </li>
    </ul>

    <ul>
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>

    <b-form v-if="$store.state.isAdmin" @submit="addCategory (categoryTitle, image)">
      <b-form-input v-model="categoryTitle" placeholder="Category Title"></b-form-input>
      <b-form-input v-model="image" placeholder="Category Image URL"></b-form-input>
      <b-button type="submit">Add New Category</b-button>
    </b-form>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  data() {
    return {
      categories: [],
      categoryTitle: '',
      image: '',
      errors: []
    }
  },
  firestore () {
    return {
      categories: db.collection('categories')
    }
  },
  methods: {
    listEntries () {
      console.log('butts')
    },
    addCategory (entryTitle, image) {
      const createdAt = new Date()
      db.collection('categories').add({ categoryTitle, image, createdAt })
    },
    deleteCategory (id) {
      db.collection('categories').doc(id).delete()
    }
  }
}
</script>
