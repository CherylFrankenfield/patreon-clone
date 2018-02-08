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
    // backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  };
  const buttonDiv = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: '35%',
    left: '45%'
  };

  return(
    <div style={heroDiv}>
      <style jsx global>{`
          .titleH2 {
            color: white;
            text-align: center;
            position: absolute;
            text-shadow: 1px 1px 1px black;
            font-size: 40px;
            top: 25%;
            left: 40%;
            z-index: 1;
          }
          .videoPosition {
            position: relative;
            z-index: -1;
            width: 100%;
          }
          `}</style>


        <video autoPlay name="media" loop className=
          "videoPosition"><source src="https://c5.patreon.com/external/landing_pages/video/what_is_patreon_background_vp8.webm" type="video/webm"/></video>
      <div>
        <h2 className="titleH2">
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
