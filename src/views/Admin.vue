<template>
  <div class="Admin">
    <h1>This will be an admin page</h1>
    <br>
    <Entries />
  </div>
</template>

<script>
import Entries from '@/components/Entries.vue'

export default {
  name: 'admin',
  components: {
    Entries
  }
}
</script>
