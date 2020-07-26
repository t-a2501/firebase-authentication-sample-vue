<template>
  <div class="signin">
    <h1>Sign In</h1>
    <input type="text" placeholder="User Name" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button v-on:click="signIn">Sign In</button>
    <p>Have you registered an account? <br>
      <router-link to="/signup">Click here to register for an account</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password)
      .then(user => {
          alert('Success', user)
          this.$router.push('/success')
        },
        error => {
          alert(error.message)
        }
      )
    }
  }
}
</script>