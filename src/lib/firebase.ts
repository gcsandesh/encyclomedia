// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { ENV } from '@/constants/env'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ENV.fire_apiKey,
  authDomain: ENV.fire_authDomain,
  projectId: ENV.fire_projectId,
  storageBucket: ENV.fire_storageBucket,
  messagingSenderId: ENV.fire_messagingSenderId,
  appId: ENV.fire_appId,
  measurementId: ENV.fire_measurementId
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
