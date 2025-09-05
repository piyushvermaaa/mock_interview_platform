// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCBX0M3qM_ASUbr4xtp0JuTFk7CAU2ona8",
    authDomain: "prepwise-62c69.firebaseapp.com",
    projectId: "prepwise-62c69",
    storageBucket: "prepwise-62c69.firebasestorage.app",
    messagingSenderId: "642608872621",
    appId: "1:642608872621:web:7b48d8cbb92402722d9a24",
    measurementId: "G-JP2SN14C0G"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export  const db = getFirestore(app)
