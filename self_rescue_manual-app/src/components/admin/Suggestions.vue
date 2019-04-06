<template>
  <div id="suggestions">
  {suggestions}
  </div>
</template>

<script>
  import components from '../components/'

  export default {
    name: 'Suggestions',
    data () {
      return {
      }
    },
    components: components
  }
</script>

<style scoped lang="scss">
 div #suggestions {
   margin: 5rem;
 }
</style>
