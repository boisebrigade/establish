<template>
  <div id='edit'>
    <label>
      Find a Resource:
      <input v-model="query"/>
    </label>
    <ul v-for="result of queryResults">
        <li>{{result.name}}</li>
    </ul>

    </div>
  </div>
</template>

<script>
  import fz from 'fuzzaldrin-plus';

  export default {
    name: 'EditResource',
    data () {
      return {
        query: '',
        resources: [
          'aaa','bbb','ccc',111,222,333
        ]
      }
    },
    methods: {
    },
    computed: {
      queryResults() {
      // Don't bother with scoring anything if the query is empty.
      if(!this.query) return this.options;

      // Preparing the query before-hand lets fuzzaldrin-plus optimize things a bit.
      const preparedQuery = fz.prepareQuery(this.query);
      // We use this to keep track of the similarity for each option.
      const scores = {};

      return this.options
        // Score each option & create a new array out of them.
        .map((option, index) => {
          // See how well each field compares to the query.
          const fieldScores = [
            option.id,
            option.name
          // Creating an array of fields and mapping is easier than writing
          // fz.score(...) n times. Same idea.
          // Scores are a non-normalized number
          // representing how similar the query is to the field.
          ].map(field => fz.score(field, this.query, { preparedQuery }));

          // Store the highest score for this option
          // so we can compare it to other options.
          scores[option.id] = Math.max(...fieldScores);

          return option;
        })
        // Remove anything with a really low score.
        // You might want to play around with this.
        .filter(option => scores[option.id] > 1)
        // Finally, sort by the highest score.
        .sort((a, b) => scores[b.id] - scores[a.id])
      ;
    }
  }
}

</script>

<style scoped lang="scss">
 div #edit {
   margin: 5rem;
 }
</style>
