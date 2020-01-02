import * as firebase from 'firebase/app'

const provider = new firebase.auth.GoogleAuthProvider()

const sigin = async () => {
  const result = await firebase.auth().signInWithPopup(provider)
  return result
}

export { provider as googleAuthProvider, sigin as googleSignin }
