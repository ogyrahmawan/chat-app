<template>
  <div>
    <p>please login</p>
    <label>email</label>
    <input v-model="email" >
    <label>password</label>
    <input v-model="password" >
    <button @click="register">Login With Email</button>
    <button @click="googleLogin">Login with Google</button>
  </div>
</template>
<script>

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    googleLogin () {
      this.$store.dispatch('googleLogin')
    },
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>
