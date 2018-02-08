import React from 'react';
import PropTypes from 'prop-types';

function LogIn(props) {
  return(
    <div>
      <h2 style={props.header}></h2>
      <div style={props.outerDiv}>
        LogIn Works
        <div style={props.innerDiv}></div>
      </div>

    </div>
  );
}

LogIn.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
};

export default LogIn;
