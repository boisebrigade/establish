<template>
  <div class="Admin">
    <h1>This will be an admin page</h1>
    <b-btn>Add Resource</b-btn>
    <b-btn>Edit Resource</b-btn>
    <br>
  </div>
</template>

<style lang="scss">

</style>

<script>
  import components from '@/components/admin/'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: components
  }
</script>
