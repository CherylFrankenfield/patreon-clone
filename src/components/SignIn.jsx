import React from 'react';

let path= window.location.href;

let pathArray = path.split( '/' );

// if window.location.href.indexOf('signin') {
//   alert("sign in");
// }

function SignIn() {
  console.log(window.location.href);
  return(
    <div>
      SignIn Works
    </div>
  );
}

export default SignIn;
