import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import firebase from '../firebase/config'

const { auth } = firebase

const authApi = {
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      return userCredential.user // Return the user object after a successful login
    } catch (error) {
      throw error // Throw the error to be handled by the calling function
    }
  },
  register: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      return userCredential.user // Return the user object after successful registration
    } catch (error) {
      throw error // Throw the error to be handled by the calling function
    }
  },
  observeAuth: (callback) => {
    onAuthStateChanged(auth, (user) => {
      callback(user) // Call the provided callback function with the user object
    })
  },
}

export default authApi
