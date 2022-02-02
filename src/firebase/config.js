import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAyE0oJ4zjyWrpGXobpJQkhVLFgF7c0tHM",
    authDomain: "olxclone-660bb.firebaseapp.com",
    projectId: "olxclone-660bb",
    storageBucket: "olxclone-660bb.appspot.com",
    messagingSenderId: "452314049572",
    appId: "1:452314049572:web:8af231b7b8cd7a575cfcb1",
    measurementId: "G-TPQ4HCCQ8S"
  };

 export default firebase.initializeApp(firebaseConfig)