<template>
  <header class="header">
		<div class="shell shell--large">
			<div class="header__inner">
				<div class="header__aside">
					<img src="https://firebasestorage.googleapis.com/v0/b/establish-rescuemanual.appspot.com/o/logo.png?alt=media&token=6752c6b8-cc12-42ec-8801-546c852ea08c"  class="logo-logo" v-responsive.md.lg.xl />
          <img src="https://firebasestorage.googleapis.com/v0/b/establish-rescuemanual.appspot.com/o/Boise-Schools-Logo%402x.png?alt=media&token=50ef0122-676d-42eb-8883-2e13d08068ab" class="mobile-logo" v-responsive.sm.xs >
				</div>
        <div class="header__content">

          <a href="#" v-on:click="toggleBurgerActive" class="burger-menu" v-bind:class="{ active: burgerActive }" v-responsive.sm.xs >
            <span></span>
            <span></span>
            <span></span>
            <ul>
              <li>
                <b-button href="#" class="btn">Download Ada County</b-button>
              </li>
              <li>
                <b-button href="#" class="btn">Download Canyon County</b-button>
              </li>
              <li>
                <b-btn v-b-modal.modal1 href="#" class="">Suggest Resource</b-btn>
              </li>
            </ul>
          </a>

          <nav class="nav" v-responsive.md.lg.xl>
            <ul>
              <li>
                <b-button href="#" class="btn">Download Ada County</b-button>
              </li>
              <li>
                <b-button href="#" class="btn">Download Canyon County</b-button>
              </li>
              <li>
                <b-btn v-b-modal.modal1 href="#" class="">Suggest Resource</b-btn>
              </li>
            </ul>
            <span class="nav__overlay"></span>
          </nav><!-- /.nav -->
        </div><!-- /.header__content -->
      </div><!-- /.header__inner -->
    </div><!-- /.shell -->
      <!-- Modal Component -->
    <b-modal id="modal1" title="Suggest a Resource" :cancel-disabled="true"
      :ok-disabled="true">
      <Suggest></Suggest>
      <div slot="modal-footer" class="w-100">
      </div>
    </b-modal>
    </div>
	</header>

</template>

<script>

import Suggest from './Suggest.vue'

export default {
  name: 'Header',
  data() {
    return {
      burgerActive: false
    }
  },
  methods: {
    toggleBurgerActive: function() {
      this.burgerActive = ! this.burgerActive
    }
  },
  components: {
    Suggest
  }
}
</script>

<style scoped lang="scss">

</style>
