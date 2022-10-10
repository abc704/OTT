import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChizEOAXm0V4u27waq91vmKh_nWMhDAOo",
  authDomain: "react-netflix-threejs-clone.firebaseapp.com",
  projectId: "react-netflix-threejs-clone",
  storageBucket: "react-netflix-threejs-clone.appspot.com",
  messagingSenderId: "817749901412",
  appId: "1:817749901412:web:d4b0c0c10abc75a2c65f71",
  measurementId: "G-VR4026MXBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);