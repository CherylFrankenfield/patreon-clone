import React from 'react';
import FaQq from 'react-icons/lib/fa/qq';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaHandORight from 'react-icons/lib/fa/hand-o-right';
import FaCheck from 'react-icons/lib/fa/check';

function SignIn() {
  return(
    <div className="signUpForm">
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
        input:last-of-type {
          width: 5%;
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
      <button className="facebookButton">Sign Up With Facebook</button>
      <p>or sign up with e-mail</p>
      <label><FaQq/></label><input placeholder="Full Name"/><br></br>
      <label><FaEnvelope/></label><input placeholder="Email"/><br></br>
      <label><FaHandORight/></label><input placeholder="Confirm Email"/><br></br>
      <label><FaCheck/></label><input placeholder="Password"/><br></br>
      <input type="radio"/>You Agree to our Terms of Use<br></br>
      <button className="signUpButton">SIGN UP</button>
      <p>Log in</p>
    </div>
  );
}

export default SignIn;
