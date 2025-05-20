// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzrzjryNFTa_2-5RM7ASdjGEx24Xh-dvI",
    authDomain: "efootball-mini-tourney.firebaseapp.com",
    projectId: "efootball-mini-tourney",
    storageBucket: "efootball-mini-tourney.firebasestorage.app",
    messagingSenderId: "608911930696",
    appId: "1:608911930696:web:a8ac3c01b993d472b66f7d",
    measurementId: "G-C6JK43T593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };