<template>
  <div class="section__content" v-if="entries && entries.length">
    <div v-for="(entry, idx) in entries" :key="idx">
      <h2>{{entry.title}}<br/>
        <small>
          <a :href="entry.weburl">{{entry.webtitle}}</a>
        </small>
      </h2>
      <div class="infobox">
        <div class="infobox__aside" v-for="(tel, idx) in phones" :key="idx">
          <a :href="tel.number">
            {{tel.number}}<br/><span>{{tel.type}}</span>
          </a>
        </div>
        <div class="infobox__content" v-for="(time, idx) in open" :key="idx">
          {{time.days}}
          {{time.hours}}
        </div>
      </div>
      <p>{{entry.description}}</p>
      <p>{{entry.addInfo}}</p>
      <aside class="section__aside">
        <div class="map-outer">
          <div class="map" v-for="(map, idx) in maps" :key="idx">
            <iframe :src="map.maptile" width="320" height="175" frameborder="0" style="border:0" allowfullscreen></iframe>
            <address class="map__address">
              <a :href="map.address">
                {{map.street}}<br/>
                {{map.city}}, {{map.state}} {{map.zip}}
              </a>
            </address>
          </div>
        </div>
      </aside>
      <div class="section__content" v-if="errors && errors.length">
        <ul>
          <li v-for="error of errors">
            {{error.message}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h2{
    text-align: left;
    box-sizing: border-box;
    color:rgb(41, 127, 202);
    display: block;
    font-family:Roboto, sans-serif;
    font-size:52px;
    font-weight:300;
    height:104px;
    letter-spacing: -1.82px ;
    line-height:52px;
    }

  p {
    text-align: left;
    box-sizing: border-box;
    color:rgb(41, 127, 202);
    display:block;
    font-family:Roboto, sans-serif;
    font-size:16px;
    font-weight:400;
    height:72px;
    line-height:24.8px;
    outline-color:rgb(41, 127, 202);
  }
</style>

<script>
import { db } from '../main'

export default {
  name: 'Resources',
  data() {
    return {
      resources: [],
      errors: []
    }
  },
  firestore () {
    return {
      resources: db.collection('resources'),
    }
  }
}
</script>
