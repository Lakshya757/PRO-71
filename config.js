import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDAvD5_iEqFVpkPSjgOIId_rRgUkmejb9g",
  authDomain: "pro-71-3ce7d.firebaseapp.com",
  projectId: "pro-71-3ce7d",
  storageBucket: "pro-71-3ce7d.appspot.com",
  messagingSenderId: "519508846895",
  appId: "1:519508846895:web:66df5b39e3e7ca266e99da"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

