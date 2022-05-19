import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../UserAuth/UserAuth.js";
import '../components/cssfiles/Reg.css'
import {SignInWithGoogle} from '../components/Firebase.js';
import {FiPhoneCall} from "react-icons/fi"
import Pulse from 'react-reveal/Pulse';
import Tada from 'react-reveal/Tada';

const Login = () => {

    
  return(
    <form className="form">
    <h2>Sign In</h2>
    <button className="sign-in-btn"><FiPhoneCall className="call"/>Sign in with Phone Number</button>
    <GoogleButton onClick={SignInWithGoogle} className="google-button">Sign in with Google</GoogleButton>
    <div className="existing">
      Existing user ? 
      <p>Login in with phone humber </p>
    </div>
    </form>
  )

};

export default Login;