import React from 'react';
import Button from './Button';
import hero from './../../hero.jpeg';

function Hero(){
  const aboutButton = {
    backgroundColor: 'white',
    color: 'black'
  };
  const startButton = {
    backgroundColor: 'salmon',
    color: 'white'
  };
  const heroDiv = {
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const buttonDiv = {
    display: 'flex',
    justifyContent: 'center'
  };

  return(
    <div style={heroDiv}>
      <div>
        <h2 className="titleH2">
          <style jsx>{`
              .titleH2 {
                color: white;
                text-align: center;
              }`}</style>
            Creators, Come get Money</h2>
        <div style={buttonDiv}>
          <Button bgColor={aboutButton}
            text="WHAT IS MATREON?"/>
          <Button bgColor={startButton}
            text="START MY PAGE"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
