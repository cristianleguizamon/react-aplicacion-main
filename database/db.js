// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM4naXvmQaJi6YbpIimjPtj_30GVfHGU0",
  authDomain: "base-react-75934.firebaseapp.com",
  projectId: "base-react-75934",
  storageBucket: "base-react-75934.appspot.com",
  messagingSenderId: "261484463340",
  appId: "1:261484463340:web:60bd42a096b1c1cf8091c9",
  measurementId: "G-908CBK6MWD"
};

// Initialize Firebase
const dbfire = initializeApp(firebaseConfig);
export default dbfire
//const analytics = getAnalytics(app);