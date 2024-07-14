
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore } from 'firebase/firestore'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "",
  authDomain: "dixitcoder-tools-ai.firebaseapp.com",
  projectId: "dixitcoder-tools-ai",
  storageBucket: "dixitcoder-tools-ai.appspot.com",
  messagingSenderId: "161412055596",
  appId: "1:161412055596:web:5ad8aff25c96836763c789",
  measurementId: "G-MXTT75NHRW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const database = getDatabase(app);

export { auth , db ,database };
