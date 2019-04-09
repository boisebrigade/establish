<template>
  <div class="text">
    <hr>
    <div v-for="(resource, idx) in resources" :key="idx" >
      <div class="section__content">
        <h2>{{resource.fields.title}}<br/>        
          <small v-for="(web, index) in resource.fields.webAddress" :key="`web-${index}`"></li>
            <a :href="web">
              {{web}}</span>
            </a>
          </small>
        </h2>

        <b-row>
          <b-col >
            <h4>Phones:</h4>
            <div v-for="(phone, index) in resource.fields.phone" :key="`phone-${index}`"></li>
              <a :href="'tel:'+phone">
                <span><b>{{phone}}</b></span>
              </a>
            </div>
          </b-col >
          <b-col cols="8">
            <div>
              <h4 v-if="resource.fields.sunday">Hours:</h4>
              <table >
                <th v-if="resource.fields.sunday">Sunday</th>
                <th v-if="resource.fields.monday">Monday</th>
                <th v-if="resource.fields.tuesday">Tuesday</th>
                <th v-if="resource.fields.wednesday">Wednesday</th>
                <th v-if="resource.fields.thursday">Thursday</th>
                <th v-if="resource.fields.friday">Friday</th>
                <th v-if="resource.fields.saturday">Saturday</th>
                <tr>
                  <td> 
                    <span v-for="(hour, index) in resource.fields.sunday" :key="`hour-${index}`">
                      {{hour}}<br>
                    </span>
                  </td>
                  <td> 
                    <span v-for="(hour, index) in resource.fields.monday" :key="`hour-${index}`"> 
                      {{hour}}<br>
                    </span>
                  </td>
                  <td> 
                    <span v-for="(hour, index) in resource.fields.tuesday" :key="`hour-${index}`"> 
                     {{hour}}<br>
                    </span>
                  </td>
                  <td> 
                    <span v-for="(hour, index) in resource.fields.wednesday" :key="`hour-${index}`">
                      {{hour}}<br>
                    </span>
                  </td>
                  <td> 
                    <span v-for="(hour, index) in resource.fields.thursday" :key="`hour-${index}`">
                      {{hour}}<br>
                    </span>
                  </td>
                  <td > 
                    <span v-for="(hour, index) in resource.fields.friday" :key="`hour-${index}`">
                      {{hour}}<br>
                    </span>
                  </td>
                  <td > 
                    <span v-for="(hour, index) in resource.fields.saturday" :key="`hour-${index}`">
                      {{hour}}<br>
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </b-col>
        </b-row>
      </div>
      <aside>
        <div class="map-outer">
          <div class="map">
            <iframe :src="resource.map_tile" width="320" height="175" frameborder="0" style="border:0" allowfullscreen></iframe>
            <address class="map__address">
              <a :href="resource.fields.address">
              </a>
            </address>
          </div>
        </div>
      </aside>
      <p>{{resource.fields.description}}</p>
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

  const spaceID = process.env.VUE_APP_SPACE_ID
  const accessToken = process.env.VUE_APP_ACCESS_TOKEN
  export default {
    name: 'Resources',
    data() {
      return {
        currentCategory: "Health",
        resources: [],
        errors: [],
      }
    },
    mounted(){
      axios.get(`https://cdn.contentful.com/spaces/${spaceID}/entries/?content_type=resource&access_token=${accessToken}`)
        .then(response => {this.resources = response.data.items})
        .then(() => {console.log('resources', this.resources)})
        .catch(e => {this.errors.push(e)})
    }
  }
</script>
<style lang="scss" scoped>
  table th {
    padding: .2em;
  }
  td {

  }
</style>
>