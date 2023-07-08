import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCZ64r1q9CD6vk24FuW3kWlgWjBUDDCQJ0',
  authDomain: 'bank-service-reactjs.firebaseapp.com',
  projectId: 'bank-service-reactjs',
  storageBucket: 'bank-service-reactjs.appspot.com',
  messagingSenderId: '1022347430279',
  appId: '1:1022347430279:web:3483e452a4d0b289d0ab22',
  measurementId: 'G-PXRXJGS0NN',
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

auth.languageCode = 'vi'

const firebase = {
  auth,
  app,
}

export default firebase
