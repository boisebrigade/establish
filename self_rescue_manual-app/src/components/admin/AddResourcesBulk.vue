<template>
  <div id='addBulk'>
    <h1>Add a bunch of Resources at once via a POST of JSON to the contentful API</h1>
    <hr/>
    <b-form class="form" @submit="onSubmit" @reset="onReset">
      <b-form-group id="bulk-resources"
                    label="Bulk upload of Resource JSON object"
                    label-for="bulk-resources">
        <b-form-textarea id="json-object"
                      type="JSON"
                      rows=20
                      v-model="form.entries"
                      >
        </b-form-textarea>
      </b-form-group>
      <b-button class="btn btn--blue" type="submit">POST resources</b-button>
    </b-form>
    <p>{{this.entryresults}}</p>
  </div>
</template>

<script>
  import components from '../components/'
  import {createClient} from '../plugins/contentful.js'
  const client = createClient(),
      spaceID = process.env.VUE_APP_SPACE_ID
  export default {
    name: 'AddResource',
    data () {
      return {
        form: {
          entries: ''
        },
        entryresults: ''
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        createResources(this.contentTypeID, this.entries)
      },
      createResources(contentTypeID, entries) {
        client.getSpace(spaceID)
        .then((space) => space.createEntry(contentTypeId, entries))
        .then((entry) => this.entryresults = (entry))
        .catch(console.error)
      }
    }
  }
</script>

<style scoped lang="scss">

div #addBulk {
  margin-top: 2rem;
}
h1{
  margin: 0;
  text-align: left;
}
p {
  margin-bottom: 1rem;
  text-align: left;
}
.btn {
  margin-left: 0;
}
</style>
