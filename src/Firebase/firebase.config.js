// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp57SerYDySmmBUXPQ5bGQrswfMxRaFY0",
    authDomain: "art-of-defense-f91e7.firebaseapp.com",
    projectId: "art-of-defense-f91e7",
    storageBucket: "art-of-defense-f91e7.appspot.com",
    messagingSenderId: "190787461182",
    appId: "1:190787461182:web:2a9c4f87a5d40dd00fb16f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;