<template>
  <div>
    <a href="#" v-on:click="toggleActive" class="burger-menu" v-bind:class="{ active: isActive }" v-responsive.sm.xs >
    <span></span>
    <span></span>
    <span></span>
    </a>
    <ul>
      <li>
        <b-button href="#" class="">Download Ada County</b-button>
      </li>
      <li>
        <b-button href="#" class="">Download Canyon County</b-button>
      </li>
      <li>
        <b-button href="#" class="">Suggest Resource</b-button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'nav',
  data() {
    return {
    }
  },
  methods: {
    suggestResource: () => {

    },
    toggleActive: function() {
      this.isActive = ! this.isActive
    }
  }
}
</script>

<style scoped lang="scss">

</style>
