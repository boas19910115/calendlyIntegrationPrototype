import * as firebase from 'firebase/app'
import 'firebase/auth'
import constant from 'constant'
import store from 'reduxStore'
import { setUserAction } from 'reduxStore/actions'
const firebaseConfig = {
  ...constant.firebase,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(setUserAction(user))
  }
})
