import * as firebase from 'firebase/app'
import { googleAuthProvider } from 'services/firebase/google'

const provider = new firebase.auth.FacebookAuthProvider()
provider.setCustomParameters({
  display: 'popup',
})

const sigin = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider)
    return result
  } catch (error) {
    const { code, credential } = error
    switch (code) {
      case 'auth/account-exists-with-different-credential': {
        googleAuthProvider.setCustomParameters({
          login_hint: error.email,
        })
        const result = await firebase.auth().signInWithPopup(googleAuthProvider)
        // Link Facebook credential to Google account.
        result.user.linkWithCredential(credential)
        return result
      }
      default:
        throw error
    }
  }
}

export { provider as facebookAuthProvider, sigin as facebookSignin }
