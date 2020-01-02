import firebase from 'firebase/app'
import 'firebase/firestore'

const DB = firebase.firestore()

const shopOpenTime = DB.collection('shopTime')

export { shopOpenTime }
