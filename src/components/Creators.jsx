import React from 'react';
import PropTypes from 'prop-types';

function Creators(props) {
  return(
    <div>
      <style jsx>
        {`
          img {
            width: 100%;
            height: 50%;
          }
          `}
      </style>
      <img src={props.image}/>
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

Creators.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string
};
export default Creators;
