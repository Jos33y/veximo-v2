// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD58tWh96niXx4UTRWUc821RDzhwRLICng",
  authDomain: "veximo-1bec0.firebaseapp.com",
  projectId: "veximo-1bec0",
  storageBucket: "veximo-1bec0.appspot.com",
  messagingSenderId: "176475374588",
  appId: "1:176475374588:web:ddc1ec5856c0549d1aa879",
  measurementId: "G-6DJVQFJ77X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);