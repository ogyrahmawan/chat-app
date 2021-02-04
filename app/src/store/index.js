import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import firebase from 'firebase'
require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyD_HUtttvPkXI4xs_3j7AVQLitoaJ0cbU4',
  authDomain: 'qontak-app.firebaseapp.com',
  databaseURL: 'https://qontak-app-default-rtdb.firebaseio.com',
  projectId: 'qontak-app',
  storageBucket: 'qontak-app.appspot.com',
  messagingSenderId: '363247653149',
  appId: '1:363247653149:web:6146ce9e4ec0e7b2a6d1f4'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
// const chatsRef = db.collection('chats')
window.db = db
db.settings({
  timestampsInSnapshots: true
})

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
    register (payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const name = user.displayName.split('@')[0]
          localStorage.setItem('username', name)
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login (payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const name = user.displayName.split('@')[0]
          localStorage.setItem('username', name)
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchMessage (context) {
      db.collection('chat').orderBy('createdAt')
        .onSnapshot(querySnapshot => {
          const allMessages = []
          querySnapshot.forEach(doc => {
            allMessages.push(doc.data())
          })
          context.commit('setMessages', allMessages)
        })
    },
    saveMessage (message) {
      db.collection('chat').add({
        message: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        username: localStorage.username
      })
      this.message = ''
      this.fetchMessage()
    }
  },
  modules: {
  }
})
