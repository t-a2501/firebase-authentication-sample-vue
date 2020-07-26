<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <input type="text" placeholder="User Name" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/signin">You can also sign in here.</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
   methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Sign up is completed。Move pages from to Sign in page', user.email)
          this.$router.push('/signin')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }

}
</script>