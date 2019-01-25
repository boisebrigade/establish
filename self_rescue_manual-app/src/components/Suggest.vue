<template>
  <div>
  <b-btn v-if="!$store.state.isUser" @click="$store.state.isUser = true">Login</b-btn>
  <div v-if="$store.state.isUser">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="InputGroup1"
                    label="Email address:"
                    label-for="Input1"
                    description="">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="InputGroup2"
                    label="Your Name:"
                    label-for="Input2">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="InputGroup3"
        label="Details:"
        label-for="Input3">
        <b-form-textarea id="details"
          type="text"
          v-model="form.details"
          required
          :rows="3" onloadedmetadata=""
          placeholder="Please list any errors you've found on a resource here, or the contact information for a resource we've missed">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="checkgroup">
        <b-form-checkbox-group v-model="form.checked" id="checks">
          <b-form-checkbox value="work">I work or volunteer for this suggestion</b-form-checkbox>
          <b-form-checkbox value="contact">Please add my contact info to your newsletter</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button class="submit" type="submit" variant="primary">Submit</b-button>
      <b-button class="reset" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Suggest',
    data () {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      }
    }
  }
</script>

<style scoped>

    #checkgroup {
     text-align: left;
   }

   .submit, .reset {
     margin: 1em;
   }

</style>
