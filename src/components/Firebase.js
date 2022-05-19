// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyD3kSmXmJO3Hw6f4mF2ypRzTNgKQCOJjkU",
  authDomain: "phone-auth-19d0c.firebaseapp.com",
  projectId: "phone-auth-19d0c",
  storageBucket: "phone-auth-19d0c.appspot.com",
  messagingSenderId: "78783645545",
  appId: "1:78783645545:web:b51bacce2ba523153a9ff8",
  measurementId: "G-JDEBH4222S"
};

const app = initializeApp(firebaseConfig);

export const authentication=getAuth(app);

const provider=new GoogleAuthProvider();

export const SignInWithGoogle=()=>{
  signInWithPopup(authentication, provider)
  .then((result)=>{
    console.log(result);
    alert ('Successfully Signed In as');
    <Navigate to="/"/>
    const name= result.user.displayName;
    const pic= result.user.photoURL;

    localStorage.setItem("name",name);
    localStorage.setItem("pic",pic);
    alert("Welcome to Renee "+name);
    
  })
  .catch((err)=>{
    console.log(err);
    alert('Attempt to Sign In Failed');
  })
}