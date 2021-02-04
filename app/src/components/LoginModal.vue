<template>
<div>
  <b-button class="btn-block" id="show-btn" @click="showModal">Login With Email</b-button>
    <b-modal
    content-class="modal_login"
    :header-bg-variant="headerBgVariant"
    :header-text-variant="headerTextVariant"
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
    ref="my-modal"
    hide-header
    hide-footer
    >
      <div class="d-flex justify-content-center">
        <div @click="changePosition('login')" v-if="position === 'login'" class="login_sec w-50 text-center text-warning border border-light section-btn ">
          <h5>LOGIN</h5>
        </div>
        <div @click="changePosition('login')" v-if="position !== 'login'" class="login_sec w-50 text-center text-white section-btn border border-light">
          <h5>LOGIN</h5>
        </div>
        <div @click="changePosition('register')" v-if="position === 'register'" class="register_sec w-50 text-center text-warning section-btn border border-light">
          <h5>REGISTER</h5>
        </div>
        <div @click="changePosition('register')" v-if="position !== 'register'" class="register_sec w-50 text-center text-white section-btn border border-light">
          <h5>REGISTER</h5>
        </div>
      </div>
      <div v-if="position === 'login'" class="d-flex justify-content-center form_container W-100">
        <form @submit.prevent="login">
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input v-model="email" type="email"  class="form-control input_user"  placeholder="email" required>
          </div>
          <div class="input-group mb-2">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
            </div>
            <input v-model="password" type="password"  class="form-control input_pass"  placeholder="password" required>
          </div>
          <div class="form-group">
          </div>
          <div class="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" class="btn login_btn mt-5">LOGIN</button>
          </div>
        </form>
      </div>

      <div v-if="position === 'register'" class="d-flex justify-content-center form_container">
        <form @submit.prevent="register">
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-user"></i></span>
            </div>
            <input v-model="email" type="email"  class="form-control input_user"  placeholder="email" required>
          </div>
          <div class="input-group mb-2">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-key"></i></span>
            </div>
            <input v-model="password" type="password"  class="form-control input_pass"  placeholder="password" required>
          </div>
          <div class="form-group">
          </div>
          <div class="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" class="btn login_btn mt-5">REGISTER</button>
          </div>
        </form>
      </div>
    </b-modal>
</div>
</template>

<script>
export default {
  name: 'LoginModal',
  data () {
    return {
      position: 'login',
      email: '',
      password: '',
      headerBgVariant: 'light',
      headerTextVariant: 'dark',
      bodyBgVariant: 'faded',
      bodyTextVariant: 'dark'
    }
  },
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    changePosition (section) {
      this.position = section
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
      console.log(payload)
      this.$store.dispatch('login', payload)
    }
  }
}
</script>
<style scoped>
.modal-body {
  background: steelblue;
}
.section-btn {
  background: #0275d8 !important;
  padding: 2px;
  cursor: pointer;
}
.form_container {
  margin-top: 50px;
}
.login_btn {
  width: 100%;
  background: #0275d8 !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #0275d8 !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
</style>
