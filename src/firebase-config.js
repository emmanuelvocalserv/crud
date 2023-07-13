import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyBxpBtTPbLElPS7xKbU0KlVXPm1iLnkAkM",
    authDomain: "augustus-firebase.firebaseapp.com",
    projectId: "augustus-firebase",
    storageBucket: "augustus-firebase.appspot.com",
    messagingSenderId: "609032610670",
    appId: "1:609032610670:web:7e00383c72e8bddbefd77f",
    measurementId: "G-PH9YMBJDBJ"
  };

  const app = initializeApp(firebaseConfig);


 export const db = getFirestore(app)