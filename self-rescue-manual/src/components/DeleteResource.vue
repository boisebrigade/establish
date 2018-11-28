<template>
  <div class="section__content" v-if="entries && entries.length">
    <div v-for="(entry, idx) in entries" :key="idx">
      <b-button v-if=$store.state.isAdmin @click="deleteEntry(entry.id)">Delete</b-button>
      <h2>{{entry.title}}<br/>
        <small>
          <a :href="entry.weburl">{{entry.webtitle}}</a>
        </small>
      </h2>
      <div class="infobox">
        <div class="infobox__aside" v-for="tel in entry.tels">
          <a href="tel:{{entry.tel.number}}" TODO: add method/funtion to remove dashes etc... >
            {{entry.tel.number}}<br/><span>{{entry.tel.type}}</span>
          </a>
        </div>
        <div class="infobox__content" v-for="time in entry.times">
          {{entry.time.days}}
          {{entry.time.hours}}
        </div>
      </div>
      <p>{{entry.description}}</p>
      <p>{{entry.addInfo}}</p>
    </div>
    <aside class="section__aside">
      <div class="map-outer">
        <div class="map"> v-for="map in entry.maps">
          <iframe :src="entry.map.maptile" width="320" height="175" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <address class="map__address">
          <a :href="entry.map.address">
            {{entry.map.street}}<br/>
            {{entry.map.city}}, {{entry.map.state}} {{entry.map.zip}}
          </a>
        </address>
      </div>
    </aside>
  </div>
  <div class="section__content" v-else-if="errors && errrors.length">
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
      entries: [{
        tels:[],
        hours:[],
        maps:[]
      }],
      errors: []
    }
  },
  firestore () {
    return {
      entries: db.collection('entries')
    }
  },
  methods: {
    deleteEntry (id) {
      db.collection('entries').doc(id).delete()
    }
  }
}
</script>
