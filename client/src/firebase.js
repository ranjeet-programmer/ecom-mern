import * as firebase from "firebase";
// import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuHbM3SKLj5czbRcOshtMg6jmG0RCC51s",
  authDomain: "ecommerce-cff30.firebaseapp.com",
  projectId: "ecommerce-cff30",
  storageBucket: "ecommerce-cff30.appspot.com",
  messagingSenderId: "1012227753625",
  appId: "1:1012227753625:web:0b1db9ad1de74822051a08",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
