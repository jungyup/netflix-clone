// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBprTEPfCxrbmAkT5qZlarWlBQxppv4ScQ",
  authDomain: "netflix-clone-f7bd0.firebaseapp.com",
//   databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
  projectId: "netflix-clone-f7bd0",
  storageBucket: "netflix-clone-f7bd0.appspot.com",
  messagingSenderId: "804167939178",
  appId: "1:804167939178:web:c089f8f4407bc5d8124613"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }