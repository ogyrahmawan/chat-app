import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    setMessages (state, payload) {
      state.messages = payload
    }
  },
  actions: {
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user
          localStorage.setItem('username', user.displayName)
          router.push('/')
        }).catch((error) => {
          console.log(error)
        })
    },
    register (context, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((res) => {
          const name = res.user.email.split('@')[0]
          localStorage.setItem('username', name)
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
          const name = res.user.email.split('@')[0]
          localStorage.setItem('username', name)
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
