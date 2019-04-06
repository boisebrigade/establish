<template>
  <section class="section">
		<div class="shell">
			<div class="section__inner">
        <hr/>
				<div class="section__top">
					<!-- <ul class="breadcrumbs">
            <li v-if="this.$store.state.selectedCounty.length >= 1 ">County</li>
            <li v-if="this.$store.state.selectedCounty">{{this.$store.state.selectedCounty}}</li>
						<li v-if="this.$store.state.selectedCategories.length >= 1">Categories</li>
						<li v-if="this.$store.state.selectedCategories.length >=1 ">{{this.$store.state.selectedCategories}}</li>
					</ul> -->
					<ul class="list-checkboxes">
            <li v-for="county in counties">
							<div class="checkbox">
								<input type="checkbox"
                :v-model="counties"
                :name="county.fields.title"
                :id="county.fields.title"
                :value="county.fields.title"></input>
								<label :for="county.fields.title">{{county.fields.title}}</label>
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
  import axios from 'axios';
  const spaceID = process.env.VUE_APP_SPACE_ID
  const accessToken = process.env.VUE_APP_ACCESS_TOKEN

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
        counties: [],
        errors:[]
      }
    },
    mounted(){
      axios.get(`https://cdn.contentful.com/spaces/${spaceID}/entries/?content_type=county&access_token=${accessToken}`)
     .then(response => {this.counties = response.data.items})
        .then(() => {console.log('counties', this.counties)})
        .catch(e => {this.errors.push(e)})
    }
  }
</script>
