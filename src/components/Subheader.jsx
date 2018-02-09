import React from 'react';

const wordArray = [
  'cool',
  'rad',
  'gnarly'
];

// function changeWord(){
//   for (var i=0; i < wordArray.length; i++){
//     let x = setInterval(wordArray[i], 1000);
//     console.log(x);
//     // return x;
//   }
// }


function Subheader() {
  const subheader = {
    textAlign: 'center'
  };

  return(
    <div>
      <h2 style={subheader}>Matreon does some really <span> really {wordArray.map((word, index) =>
        console.log(word))}
         big</span> stuff for artists. We will help you get money for your arts degree.</h2>
    </div>
  );
}

export default Subheader;
