import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return(
    <button className="hero-button" style={props.bgColor}>{props.text}
      <style jsx>
        {`
        .hero-button {
          borderRadius: 15;
          width: 'auto';
          height: 15;
          }
          `}
      </style>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.object
};

export default Button;
