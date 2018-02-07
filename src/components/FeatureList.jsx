import React from 'react';
import Feature from './Feature';
import FaDatabase from 'react-icons/lib/fa/database';
import FaCubes from 'react-icons/lib/fa/cubes';
import FaFlask from 'react-icons/lib/fa/flask';



const featureList = [
  {
    image: <FaDatabase/>,
    header: 'A MEANINGFUL REVENUE STREAM',
    text: 'Fans pay you a subscription amount of their choice in exchange for exclusive experiences & behind-the-scenes content.'
  },
  {
    image: <FaCubes/>,
    header: 'REGAIN CREATIVE FREEDOM',
    text: 'Predictable income from your patrons means you can create on your terms. No strings attached.'
  },
  {
    image: <FaFlask/>,
    header: 'OVER $150 MILLION SENT TO CREATORS',
    text: 'An average patron pays more on a monthly basis than consumers pay for Netflix, Spotify, or Amazon Prime.'
  }
]

function FeatureList() {

  return(
    <div>
      {featureList.map((features, i) =>
        <div>
          <Feature
            image={features.image}
            header={features.header}
            text={features.text}
            key={i}/>
        </div>
      )}
    </div>
  );
}

export default FeatureList;
