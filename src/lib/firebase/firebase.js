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

// let Data = [
//     //Enter json data here
// ]
//
// /**
//  * @type {string}
//  */
//
// let filename;
// async function add() {
//     const storage = getStorage();
//
//
//     for (const data of Data) {
//For Members
//         if (data.name === 'Nihal Gatty' || data.name === 'Mohammed Zihab') {
//             filename = data.name.split(' ')[1];
//         } else {
//             filename = data.name.split(' ')[0];
//         }

//For Faculty
//     switch(data.name){
//         case 'Dr. Sharada U Shenoy':
//             filename = 'Sharada';
//             break;
//         case 'Mr. Sudesh Rao':
//             filename = 'Sudesh';
//             break;
//         case 'Ms. Disha D N':
//             filename = 'Disha';
//             break;
//         case 'Mr. Mahesh B L':
//             filename = 'Mahesh';
//             break;
//         case 'Ms. Swathi Pai M':
//             filename = 'Swathi';
//             break;
//         case 'Ms. Sneha Shetty R':
//             filename = 'Sneha';
//             break;
//         case 'Ms. Smitha':
//             filename = 'Smitha';
//             break;
//         case 'Ms. Rakshitha':
//             filename = 'Rakshitha';
//             break;
//         case 'Mr. Anirudhan A C':
//             filename = 'Anirudhan';
//             break;
//         default:
//             filename = data.name.split(' ')[0];
//     }
//         //Change team to Faculty for Faculty
//         const ImageRef = ref(storage, 'Images/Faculty/' + filename + '.jpg');
//         data.image = await getDownloadURL(ImageRef);
//     }
//
//     Data.map(async (data) => {
//         await setDoc(doc(db, "Faculty",`${data.id}`), data);
//     })
//
//     console.log('Done');
// }
//
// await add();







