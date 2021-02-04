<template>
<div class="container_login">
  <div class="container_login d-flex justify-content-center align-items-center h-100">
    <div class="user_card">
      <div class="d-flex justify-content-center">
        <div class="brand_logo_container">
          <img src="../assets/logo.png" class="brand_logo" alt="Logo">
        </div>
      </div>
      <div class="text-center text-primary">
        <h5>Welcome To qontak Group Chat</h5>
      </div>
      <div class="mt-5">
        <LoginModal />
        <button @click="googleLogin" class="btn-primary btn btn-block mt-2">Login With Google Login</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import LoginModal from '../components/LoginModal'

export default {
  name: 'LoginPage',
  components: {
    LoginModal
  },
  methods: {
    googleLogin () {
      this.$store.dispatch('googleLogin')
    }
  }
}
</script>
<style scoped>
.container_login {
min-height: 100vh;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #c7ffd8;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: white;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  object-fit: scale-down;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #161d6f !important;
  color: white !important;
}

</style>
