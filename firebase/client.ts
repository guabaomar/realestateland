// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { FirebaseStorage } from "firebase/storage";    

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXeHipmK6o0kBHK2eaVFx5Agr2fniXOeA",
  authDomain: "real-estate-land-a73c8.firebaseapp.com",
  projectId: "real-estate-land-a73c8",
  storageBucket: "real-estate-land-a73c8.firebasestorage.app",
  messagingSenderId: "517258409421",
  appId: "1:517258409421:web:b7381cb7b0b1fea4c20084"
};

// Initialize Firebase
const currentApp = getApps();

let auth: Auth;
let storage: FirebaseStorage;

if (currentApp.length > 0) {
 const app = initializeApp(firebaseConfig);
 auth = getAuth(app);
 storage = getStorage(app);

} else {

 const app = currentApp[0];
 auth = getAuth(app);
 storage = getStorage(app);

}



export { auth, storage };
