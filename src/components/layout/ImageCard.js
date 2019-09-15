import React from 'react';
import PropTypes from 'prop-types';

const ImageCard = ({ img }) => {
  return (
    <div class='card'>
      <div class='card-image'>
        <img src={img} />
        <h1>Adnan Reza</h1>
        <h5>Computer Scientist</h5>
        <span class='card-title'>a</span>
      </div>
      <div class='card-content'>
        <h4>Computer Scientist</h4>
      </div>
      <div class='card-action'>
        <a href='#'>This is a link</a>
      </div>
    </div>
  );
};

ImageCard.propTypes = {};

export default ImageCard;
