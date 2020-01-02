import * as firebase from 'firebase/app'
import store from 'reduxStore'
import { clearUserAction } from 'reduxStore/actions'

const firebaseSignout = async () => {
  try {
    await firebase.auth().signOut()
    store.dispatch(clearUserAction())
    return true
  } catch (error) {
    return false
  }
}

export { firebaseSignout }
