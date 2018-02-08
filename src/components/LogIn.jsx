import React from 'react';
import PropTypes from 'prop-types';

function LogIn(props) {
  return(
    <div>
      <h2>{props.header}</h2>
      <div style={props.outerDiv}>
        LogIn Works
        <div style={props.innerDiv}></div>
      </div>

    </div>
  );
}

LogIn.propTypes = {
  header: PropTypes.string,
  outerDiv: PropTypes.object,
  innerDiv: PropTypes.object,
  icon: PropTypes.string,
};

export default LogIn;
