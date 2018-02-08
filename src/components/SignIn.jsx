import React from 'react';

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
          width: 100%;
          padding: 5px;
          height: 30px;
          border: none;
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
          height: 10vh;
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
        }
          `}
      </style>
      <button className="facebookButton">Sign Up With Facebook</button>
      <p>or sign up with e-mail</p>
      <input placeholder="Full Name"/>
      <input placeholder="Email"/>
      <input placeholder="Confirm Email"/>
      <input placeholder="Password"/>
      <input type="radio"/>You Agree to our Terms of Use<br></br>
      <button className="signUpButton">SIGN UP</button>
      <p>Log in</p>
    </div>
  );
}

export default SignIn;
