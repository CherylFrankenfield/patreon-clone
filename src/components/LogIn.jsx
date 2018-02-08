import React from 'react';
import FaCheck from 'react-icons/lib/fa/check';
import FaEnvelope from 'react-icons/lib/fa/envelope';

function LogIn() {
  return(
    <div>
      <style jsx>
        {`
      .signUpForm {
        margin: 10px;
        padding: 10px;
      }
      input {
        width: 80%;
        padding: 5px;
        height: 30px;
        border: none;
        margin-left: 5px;
        border-bottom: 2px solid gray;
      }
      input::placeholder {
        color: grey;
        font-size: 1.2rem;
      }
      p {
        text-align: center;
      }
      button {
        width: 100%;
        height: 8vh;
        font-size: 1rem;
        margin: 5px 5px;
      }
      .facebookButton {
        background-color: #3b5998;
        color: white;
      }
      .signUpButton {
        background-color: salmon;
        color: white;
        margin-top: 20%;
      }
        `}
      </style>
      <button className="facebookButton">Continue With Facebook</button>
      <p>or log in with e-mail</p>

      <label><FaEnvelope/></label><input placeholder="Email"/><br></br>
      <label><FaCheck/></label><input placeholder="Password"/><br></br>
      <a href="#">Forgot Password</a>
      <button className="signUpButton">Log In</button>
      <p>New to Matreon? <a href="#">Sign Up</a></p>

    </div>
  );
}


export default LogIn;
