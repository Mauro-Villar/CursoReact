
import { initializeApp } from "firebase/app";
import { gerFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuCE-OFAIDWKKNovln-Sd_lr6dd5t2QRs",
  authDomain: "proyectocoder-6828b.firebaseapp.com",
  projectId: "proyectocoder-6828b",
  storageBucket: "proyectocoder-6828b.appspot.com",
  messagingSenderId: "76144582258",
  appId: "1:76144582258:web:f4f3f17f600e2e6a60eceb"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)