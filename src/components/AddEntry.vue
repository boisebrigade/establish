<template v-for="(entry, idx) in entries" :key="idx">
  <div class="section__content" v-if="entries && entries.length">
    <b-form v-if="$store.state.isAdmin" @submit="addEntry (title, description)">
      <b-form-group>
        <b-form-input v-model="entryTitle" placeholder="Name"></b-form-input>
        <b-form-input v-model="entryDescription" placeholder="Description"></b-form-input>
        <b-form-input v-model="entryAddInfo" placeholder="Additional Information"></b-form-input>
        <b-form-input input v-model="webtitle" placeholder="Website (title)"> </b-form-input>
        <b-form-input input v-model="weburl" placeholder="Website (URL)"> </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="entry.tel.number"</b-form-input>
        <b-form-input v-model="entry.tel.type"</b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="entry.time.days"</b-form-input>
        <b-form-input v-model="entry.time.hours"</b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input v-model="entry.map.maptile"</b-form-input>
        <b-form-input v-model="entry.map.address"</b-form-input>
        <b-form-input v-model="entry.map.street"</b-form-input>
        <b-form-input v-model="entry.map.city"</b-form-input>
        <b-form-input v-model="entry.map.state"</b-form-input>
        <b-form-input v-model="entry.map.zip"</b-form-input>
      </b-form-group>
      <b-button type="submit">Add New Entry</b-button>
    </b-form>


      </div>
    </div>

    <div v-for="map in entry.maps">

</template>

<script>
import { db } from '../main'

export default {
  data() {
    return {
      entries: [{
        tels:[],
        open:[],
        maps:[]
      }],
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
    }
  }
}
</script>
