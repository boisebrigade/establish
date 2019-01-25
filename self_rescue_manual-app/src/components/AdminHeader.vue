<template>
  <header class="header">
		<div class="shell shell--large">
			<div class="header__inner">
				<div class="header__aside">
					<img src="https://firebasestorage.googleapis.com/v0/b/establish-rescuemanual.appspot.com/o/logo.png?alt=media&token=6752c6b8-cc12-42ec-8801-546c852ea08c"  class="logo-logo" v-responsive.md.lg.xl />
          <img src="https://firebasestorage.googleapis.com/v0/b/establish-rescuemanual.appspot.com/o/Boise-Schools-Logo%402x.png?alt=media&token=50ef0122-676d-42eb-8883-2e13d08068ab" class="mobile-logo" v-responsive.sm.xs >
				</div>
        <div class="header__content">

          <a href="#" v-on:click="toggleBurgerActive" class="burger-menu" v-bind:class="{ active: burgerIsActive }" v-responsive.sm.xs >
            <span></span>
            <span></span>
            <span></span>
            <ul>
              <li>
                <button class="btn btn-secondary" v-on:click="$emit('toggleview, add')">Add Resources</button>
              </li>
              <li>
                <button class="btn btn-secondary" v-on:click="$emit('toggleview, edit')">Edit Resources</button>
              </li>
              <li>
                <button class="btn btn-secondary" v-on:click="$emit('toggleview, suggest')">Suggestions</button>
              </li>
            </ul>
          </a>

          <nav class="nav" v-responsive.md.lg.xl>
            <ul>
              <li>
                <button class="btn btn-secondary" v-on:click="$emit('toggleview', 'add')">Add Resources</button>
              </li>
              <li>
                <button class="btn btn-secondary" v-on:click="$emit('toggleview', 'edit')">Edit Resources</button>
              </li>
              <li>
                <button class="btn btn-secondary" v-on:click="$emit('toggleview', 'suggest')">Suggestions</button>
              </li>
            </ul>
            <span class="nav__overlay"></span>
          </nav><!-- /.nav -->
        </div><!-- /.header__content -->
      </div><!-- /.header__inner -->
    </div><!-- /.shell -->
	</header>
</template>

<script>

export default {
  name: 'AdminHeader',
  data() {
    return {
      burgerIsActive: false,
    }
  },
  methods:{
    toggleBurgerActive: function(){
      this.burgerIsActive = !this.burgerIsActive
      console.log('burger')
    }
  }
}
</script>

<style scoped lang="scss">
 button {margin:0;}
</style>
