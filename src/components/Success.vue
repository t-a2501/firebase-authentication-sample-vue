<template>
  <div class="success">
    <h1>Sign in successfully</h1>
    <h2>Welcome {{ useremail }}</h2>
   <button @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Success',
  data () {
    return {
      useremail: firebase.auth().currentUser.email
    }
  },
  methods:{
    signOut: function() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }
  }
}
</script>