import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { store } from './store'

import firebase from "firebase/compat/app";
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyAm0hZrxWy8jaSKU8Dp-K-G3MC9Kgc5gY4",
  authDomain: "vue-travel-agency-app.firebaseapp.com",
  projectId: "vue-travel-agency-app",
  storageBucket: "vue-travel-agency-app.appspot.com",
  messagingSenderId: "984631250318",
  appId: "1:984631250318:web:4c72d2d00d9c92af99e8df",
  measurementId: "G-Z9ZMCZ0ZT5"
})

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch('loggedUser', user)
  }
})

createApp(App).use(router).use(store).mount('#app')