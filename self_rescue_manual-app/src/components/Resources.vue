<template>
  <div class="text">
    <div v-for="(resource, idx) in resources" :key="idx">
      <div class="section__content" >
        <h2>{{resource.title}}<br/>
          <small>
            <a :href="resource.url">{{resource.url}}</a>
          </small>
        </h2>
        <b-row>
          <b-col>
            <a :href="resource.phone">
              {{resource.phone}}<br/><span>{{resource.phone_ext}}</span>
            </a>
          </b-col>
          <b-col>
            <div>
              {{resource.days}}
              {{resource.hours}}
            </div>
          </b-col>
        </b-row>
      </div>
      <aside>
        <div class="map-outer">
          <div class="map">
            <iframe :src="resource.map_tile" width="320" height="175" frameborder="0" style="border:0" allowfullscreen></iframe>
            <address class="map__address">
              <a :href="resource.map_address">
                {{resource.street}}<br/>
                {{resource.city}}, {{resource.state}} {{resource.zip}}
              </a>
            </address>
          </div>
        </div>
      </aside>
      <p>{{resource.description}}</p>
      <p>{{resource.add_info}}</p>
      <div v-if="errors && errors.length">
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

.text {
   color: #297FCA;
   text-align: left;
 }
 aside{

 }
</style>

<script>
import axios from 'axios';
export default {
  name: 'Resources',
  data() {
    return {
      resources: null,
      errors: null,
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/resources')
      .then(response => (this.resources = response.data))
      .catch(error => (this.errors = error))
  }
}
</script>
