import React from 'react';
import Button from './Button';
import hero from './../hero.jpeg';

function Hero(){
  const aboutButton = {
    backgroundColor: 'white',
    color: 'black'
  };
  const startButton = {
    backgroundColor: 'orange',
    color: 'white'
  };
  const heroDiv = {
    backgroundImage: `url(${hero})`
  };

  return(
    <div style="heroDiv">

      <Button bgColor={aboutButton}
        text="WHAT IS MATREON?"/>
      <Button bgColor={startButton}
        text="START MY PAGE"/>
    </div>
  );
}

export default Hero;
