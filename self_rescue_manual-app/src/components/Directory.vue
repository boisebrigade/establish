<template>
  <section class="section">
		<div class="shell">
			<div class="section__inner">
        <hr/>
				<div class="section__top">
					<ul class="breadcrumbs">
            <li v-if="this.$store.state.selectedCounty.length >= 1 ">County</li>
            <li v-if="this.$store.state.selectedCounty">{{this.$store.state.selctedCounty}}</li>
						<li v-if="this.$store.state.selectedCategories.length >= 1">Categories</li>
						<li v-if="this.$store.state.selectedCategories.length >=1 ">{{this.$store.state.selectedCategories}}</li>
					</ul>
					<ul class="list-checkboxes"  id="results" >
            <li v-for="county in counties">
							<div class="checkbox">
								<input type="checkbox"
                :name="county.field.title"
                :id="county.field.title"
                :value="county.field.title">
								<label :for="county.field.title">{{county.field.title}}</label>
							</div>
						</li>
					</ul>
				</div>
        <Resources></Resources>
			</div>
		</div>
	</section>
</template>
<style>
  .breadcrumbs, .list-checkboxes {
    text-align :left;
  	color: #9B9B9B;
  	margin-bottom: 20px;
  }
</style>
<script>
import Resources from './Resources.vue'

export default {
  name: 'Directory',
  props: {
    msg: String
  },
  components:{
    Resources
  },
  data(){
    return {
        counties: this.$store.state.counties
    }
  }
}
</script>
