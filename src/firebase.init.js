// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
    apiKey: "AIzaSyC1TwZ2PbT_T12mmBREZnxXIUi6GlVSYFw",
    authDomain: "assignment-11-67ccf.firebaseapp.com",
    projectId: "assignment-11-67ccf",
    storageBucket: "assignment-11-67ccf.appspot.com",
    messagingSenderId: "953134081260",
    appId: "1:953134081260:web:f86575f2e1f410d4ae71c9"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;