<template>
  <div id='add'>
    <h1>Add a Resource</h1>
    <p>All Fields are optional.</p>
    <hr/>
    <b-form class="form" @submit="onSubmit" @reset="onReset">
      <b-form-group id="in-name"
                    label="Name of Organization/Service"
                    label-for="in-name">
        <b-form-input id="in-name"
                      type="text"
                      v-model="form.name"
                      placeholder="example: St.Lukes Hospital Meridian">
        </b-form-input>
      </b-form-group>

      <b-form-group id="in-url"
                    label="Website Address:"
                    label-for="in-url">
        <b-form-input id="in-url"
                      type="url"
                      v-model="form.url"
                      placeholder="enter a URL">
        </b-form-input>
      </b-form-group>

      <b-form-group id="in-phone"
                    label="Phone:"
                    label-for="in-phone">
        <b-form-input id="in-phone"
                      class="phone"
                      type="phone"
                      v-model="form.phone.number">
        </b-form-input>
        <b-form-input id="in-ext"
                      type="text"
                      v-model="form.phone.ext"
                      placeholder="Ext.">
        </b-form-input>
      </b-form-group>

      <b-form-group id="in-fax"
                    label="Fax Number"
                    label-for="in-fax">
        <b-form-input id="in-fax"
                      type="phone"
                      v-model="form.fax"
                      placeholder="">
        </b-form-input>
      </b-form-group>

      <b-form-group id="in-address"
                    label="Street Address"
                    label-for="in-address">
        <b-form-input id="in-address"
                      type="text"
                      v-model="form.address.street"
                      placeholder="">
        </b-form-input>
      </b-form-group>

      <b-form-group id="in-city"
                    label="City"
                    label-for="in-city">
        <b-form-input id="in-city"
                      class="city"
                      type="text"
                      v-model="form.address.city"
                      placeholder="">
        </b-form-input>
        <b-form-input id="in-zip"
                      type="text"
                      v-model="form.address.zip"
                      placeholder="zip code">
        </b-form-input>
      </b-form-group>


      <b-form-group id="in-county"
                    label="County"
                    label-for="in-county">
        <b-form-checkbox-group v-model="form.county" id="in-county">
          <b-form-checkbox value="ada">Ada County</b-form-checkbox>
          <b-form-checkbox value="canyon">Canyon County</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="in-open">
        <b-form-checkbox-group v-model="form.open.days" class="days">
          <b-form-checkbox value="Monday">Monday</b-form-checkbox>
          <b-form-input v-if="" placeholder="hours"></b-form-input>
        </b-form-checkbox-group>
        <b-form-checkbox-group stacked v-model="form.open.days" class="days">
          <b-form-checkbox value="Tuesday">Tuesday</b-form-checkbox>
          <b-form-input v-if="" placeholder="hours"></b-form-input>
        </b-form-checkbox-group>
        <b-form-checkbox-group stacked v-model="form.open.days" class="days">
        </b-form-checkbox-group>
        <b-form-checkbox-group stacked v-model="form.open.days" class="days">
          <b-form-checkbox value="Wednesday">Wednesday</b-form-checkbox>
          <b-form-input v-if="" placeholder="hours"></b-form-input>
        </b-form-checkbox-group>
        <b-form-checkbox-group stacked v-model="form.open.days" class="days">
          <b-form-checkbox value="Thursday">Thursday</b-form-checkbox>
          <b-form-input v-if="" placeholder="hours"></b-form-input>
        </b-form-checkbox-group>
        <b-form-checkbox-group stacked v-model="form.open.days" class="days">
          <b-form-checkbox value="Friday">Friday</b-form-checkbox>
          <b-form-input v-if="" placeholder="hours"></b-form-input>
        </b-form-checkbox-group>
        <b-form-checkbox-group stacked v-model="form.open.days" class="days">
          <b-form-checkbox value="Saturday">Saturday</b-form-checkbox>
          <b-form-input v-if="" placeholder="hours"></b-form-input>
        </b-form-checkbox-group>
        <b-form-checkbox-group stacked v-model="form.open.days" class="days">
          <b-form-checkbox value="Friday">Sunday</b-form-checkbox>
          <b-form-input v-if="" placeholder="hours"></b-form-input>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="in-description"
                    label="Description of Organization/Service"
                    label-for="in-description">
        <b-form-textarea id="in-name"
                      type="text"
                      rows=4
                      v-model="form.description"
                      placeholder="example: Medicaid, may slide fees. Adults 18+, primary care">
        </b-form-textarea>
      </b-form-group>

        <b-form-group id="in-categories"
                      label="Primary Categories"
                      label-for="in-categories">
          <b-form-select id="in-categories"
                        type="text"
                        v-model="form.categories"
                        :options="this.categories">
          </b-form-select >
        </b-form-group>


      <b-button class="btn btn--blue" type="submit">Preview Post</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'AddResource',
    data () {
      return {
        categories:[],
        form: {
          name: '',
          url: '',
          phone:[{
            number:'',
            ext:''
          }],
          address:[{
            street:'',
            city:'',
            zip:''
          }],
          open:[{
            day:'',
            hours:''
          }],
          county: [],
          description:[],
          categories:[],
        }
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
    }
  }
</script>

<style scoped lang="scss">
.days {}

#in-phone, #in-ext, #in-city, #in-zip, {
  width:47.5%;
  display: inline;
}
.phone, .city{
  margin-right: 1rem;
}
div #add {
  margin-top: 2rem;
}
h1{
  margin: 0;
  text-align: left;
}
p {
  margin-bottom: 1rem;
  text-align: left;
}
.btn {
  margin-left: 0;
}
</style>
