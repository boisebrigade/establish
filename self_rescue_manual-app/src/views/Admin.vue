<template>
  <div id='admin'>
    <button id='login' class="btn btn-secondary" v-if="!$store.state.isAdmin" @click="$store.state.isAdmin = true">Login</button>
    <div v-if="$store.state.isAdmin">
      <AdminHeader v-on:toggleview="onToggleView" />
      <AdminHero />
      <div class="container">
        <AddResource v-show="addIsActive" />
        <EditResource v-show="editIsActive"/>
        <Suggestions v-show="suggestIsActive"/>
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
  h1 {
    margin: 2rem;
  }
  button {
    margin: 1rem;
  }
  #login{
    margin-top: 5rem
  }
</style>

<script>
  import components from '../components/'

  export default {
    name: 'admin',
    components: components,
    data () {
      return {
        addIsActive:true,
        editIsActive:false,
        suggestIsActive:false,
      }
    },
    methods: {
      onToggleView: function(payload) {
        switch (payload) {
          case "add":
            this.addIsActive = true;
            this.editIsActive = false;
            this.suggestIsActive = false;
            console.log('add');
          break;
          case "edit":
            this.addIsActive = false;
            this.editIsActive = true;
            this.suggestIsActive = false;
            console.log('edit');
          break;
          case "suggest":
            this.addIsActive = false;
            this.editIsActive = false;
            this.suggestIsActive = true;
            console.log('suggest');
          break;
        }
      }
    },
    beforemount:{
      login(){
        console.log('beforemount, login()')
        const provider = new firebase.auth.GoogleAuthProvider();
      }
    },
    mounted:{
      authenticate(){
        console.log('mounted, authenticate()')
        firebase.auth().signInWithRedirect(provider);
      }

    }
  }
</script>
