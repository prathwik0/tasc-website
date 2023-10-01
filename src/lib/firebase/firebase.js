import {deleteApp, getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import {getDownloadURL, getStorage, ref} from "firebase/storage";
// import {setDoc, doc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDkfk7CuVog5P79QgJ5kfONzGr3Rpfi2dU",
    authDomain: "tasc-8df79.firebaseapp.com",
    projectId: "tasc-8df79",
    storageBucket: "tasc-8df79.appspot.com",
    messagingSenderId: "64049164136",
    appId: "1:64049164136:web:b18434312a0fa3b5e2b0dd",
    measurementId: "G-Q5EYD8MDVW"
};

// Initialize Firebase
let app;
if(!getApps().length){
    app = initializeApp(firebaseConfig);
} else{
    app = getApp();
    deleteApp(app);
    app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);









