<template>
  <div>
    <form>
      <textarea></textarea>
      <button>submit</button>
    </form>
  </div>
</template>

<script>
  import components from '../components/'
  // import {createClient} from '../plugins/contentful.js'
  // const client = createClient(),
  //       spaceID = process.env.VUE_APP_SPACE_ID

  export default {
    name: 'home',
    data () {
      return {
        entries: null,
        contentTypeID: 'resource'
      }
    },
    components: components,
    methods:{
      // submit(){
      //   createResources(this.contentTypeID, this.entries)
      // },
      // createResources(contentTypeID, entries) {
      //   client.getSpace(spaceID)
      //   .then((space) => space.createEntry(contentTypeId, entries))
      //   .then((entry) => console.log(entry))
      //   .catch(console.error)
      // }
    }
  }
</script>
