<template>
  <header class="header">
		<div class="shell shell--large">
			<div class="header__inner">
				<div class="header__aside">
					<a href="#" class="logo">Boise Schools</a>
				</div>
        <div class="header__content">

          <a href="#" v-on:click="toggleActive" class="burger-menu" v-bind:class="{ active: isActive }" v-responsive.sm.xs >
            <span></span>
            <span></span>
            <span></span>
            <ul>
              <li>
                <a href="#" class="btn">Download Ada County</a>
              </li>
              <li>
                <a href="#" class="btn">Download Canyon County</a>
              </li>
            </ul>
          </a>

          <nav class="nav" v-responsive.md.lg.xl>
            <ul>
              <li>
                <a href="#" class="btn">Download Ada County</a>
              </li>
              <li>
                <a href="#" class="btn">Download Canyon County</a>
              </li>
            </ul>
            <span class="nav__overlay"></span>
          </nav>
        </div>
			</div>
		</div>
	</header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive: function() {
      this.isActive = ! this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
</style>
