<template>
  <div class="intro" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/establish-rescuemanual.appspot.com/o/intro.jpg?alt=media&token=a0716be7-c718-48b7-a178-ad14528834aa)">
  		<div class="shell shell--large">
  			<div class="intro__inner">
          <b-form @submit="listEntries()" @reset="" v-if="" class="form">
            <div class="form__head">
              <h1>
    						Self Rescue <br/>
    						Manual
    					</h1>
              <p>A guide to all community resources and supports in Ada and Canyon Counties from your friends at the Boise School District
              </p>
            </div>
              <b-form class="form__body"></b-form>
              <b-form-select v-model="county" class="mb-3">
                <option :value="null">Please select a county</option>
                <option value="Ada">Ada County</option>
                <option value="Canyon">Canyon County</option>
              </b-form-select>

              <b-form-select v-model="category" class="mb-3">
                <option :value="null">Any Category</option>
                <option v-for="(category, idx) in categories" :key="idx" :value="category.title"> {{category.title}} </option>
              </b-form-select>
              <b-button v-on:click="listEntries()" type="submit" variant="primary" size="lg" v-scroll-to="'#results'">
                <font-awesome-icon icon="search" />
                Show Results
              </b-button>
            </b-form><!-- /.form -->
  			  </div><!-- /.intro__inner -->
  		</div><!-- /.shell -->
		</div><!-- /.intro -->
</template>

<script>
import { db } from '../main'
import { results } from '../main'

export default {
  name: 'Hero',
    data () {
      return {
        entries: [],
        categories: [],
        county: null,
        category: null
      }
    },
    firestore () {
      return {
        entries: db.collection('entries'),
        categories: db.collection('categories')

      }
    },
    methods: {
      listEntries(){
        console.log(this.county);
        console.log(this.category);
      }
    }
  }
</script>
