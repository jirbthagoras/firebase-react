// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "react-firebase-41f3e.firebaseapp.com",
    databaseURL: "https://react-firebase-41f3e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-firebase-41f3e",
    storageBucket: "react-firebase-41f3e.appspot.com",
    messagingSenderId: "592746226031",
    appId: "1:592746226031:web:a904ae29f5c7428466c89a",
    measurementId: "G-2FBJW4151S"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;
