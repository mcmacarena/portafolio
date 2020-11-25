import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC9cwofBpBKDBqO0S5hy_g9rXbiEC8g29I",
  authDomain: "macarenacuevasguzman.firebaseapp.com",
  databaseURL: "https://macarenacuevasguzman.firebaseio.com",
  projectId: "macarenacuevasguzman",
  storageBucket: "macarenacuevasguzman.appspot.com",
  messagingSenderId: "210337573945",
  appId: "1:210337573945:web:b103dd733b17285612b1e8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export {firebase};
