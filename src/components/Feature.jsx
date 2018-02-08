import React from 'react';
import PropTypes from 'prop-types';

function Feature(props) {
  const featureCard = {
    width: '80%',

  };
  return(
    <div style={featureCard}>
      <p className="icon">{props.image}</p>
      <style jsx>{`
            .icon {
              font-size: 50px;
            }`}</style>
      <h3>{props.header}</h3>
      <p>{props.text}</p>
    </div>
  );
}

Feature.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string
};

export default Feature;


// <img src={props.image}></img>
