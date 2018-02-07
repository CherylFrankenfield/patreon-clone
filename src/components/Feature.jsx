import React from 'react';
import PropTypes from 'prop-types';

function Feature(props) {
  return(
    <div>
      <p>{props.image}</p>
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
