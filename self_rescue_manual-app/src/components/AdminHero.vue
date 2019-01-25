<template>
  <div class="intro" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/establish-rescuemanual.appspot.com/o/intro.jpg?alt=media&token=a0716be7-c718-48b7-a178-ad14528834aa)">
  		<div class="shell shell--large">
  			<div class="intro__inner">
          <h1>This is the admin page</h1>
          <router-link to="/"><b-btn>Back Home</b-btn></router-link>
			  </div><!-- /.intro__inner -->
  		</div><!-- /.shell -->
		</div><!-- /.intro -->
</template>

<style scoped lang="scss">
  h1{
    color: rgb(41, 127, 202);
  }
  p{
    color: rgb(41, 127, 202);
  }
</style>

<script>
import { db } from '../main'
import { results } from '../main'

export default {
  name: 'AdminHero',
    data () {
      return {
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
