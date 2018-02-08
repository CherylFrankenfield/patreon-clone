import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return(
    <button className="hero-button" style={props.bgColor}>{props.text}
      <style jsx>
        {`
        .hero-button {
          border-radius: 2px;
          width: 160px;
          font-size: 13px;
          height: 50px;
          margin: 10px;
          }
          .hero-button:hover {
            opacity: .8
            box-shadow: .5px .5px 2px white;
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
