// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getFunctions, httpsCallable } from 'firebase/functions';
import { collection, getDocs, doc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApoESkofQtMcrg9z6t075KZOgTGk7nPmc",
  authDomain: "diwali-2021-c6dd3.firebaseapp.com",
  projectId: "diwali-2021-c6dd3",
  storageBucket: "diwali-2021-c6dd3.appspot.com",
  messagingSenderId: "127325642377",
  appId: "1:127325642377:web:820ba83808fa42392ef058",
  measurementId: "G-BRDQT8TY28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const fns = getFunctions(app);

const baseUrl = 'https://europe-west1-diwali-2021-c6dd3.cloudfunctions.net/';
// const baseUrl = 'https://europe-west1-diwali-2021-c6dd3.cloudfunctions.net/';
const createStripeCheckout = baseUrl + 'createStripeCheckout';
const getStripePubKey = baseUrl + 'getStripePubKey';
const updateData = baseUrl + 'updateData';

export { db, collection, getDocs, doc, fns, httpsCallable, createStripeCheckout, getStripePubKey, updateData };