<template>
  <div id="Entries">
    <ul v-if="entries && entries.length">
      <li v-for="(entry, idx) in entries" :key="idx">
        <h3>{{entry.title}}</h3>
        <p>{{entry.description}}</p>
        <button v-if=$store.state.isAdmin @click="deleteEntry(entry.id)">Delete</button>
      </li>
    </ul>

    <b-form v-if="$store.state.isAdmin" @submit="addEntry (title, description)">
      <b-form-group>
        <b-form-input v-model="title" placeholder="Entry Name"></b-form-input>
        <b-form-input v-model="description" placeholder="Entry Description"></b-form-input>
      </b-form-group>
      <b-button type="submit">Add New Entry</b-button>
    </b-form>

    <ul>
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  data() {
    return {
      entries: [],
      entryTitle: '',
      entryDescription: '',
      errors: []
    }
  },
  firestore () {
    return {
      entries: db.collection('entries')
    }
  },
  methods: {
    addEntry (entryTitle, entryDescription) {
      const createdAt = new Date()
      db.collection('entries').add({ entryTitle, entryDescription, createdAt })
    },
    deleteEntry (id) {
      db.collection('entries').doc(id).delete()
    }
  }
}
</script>
