import React from 'react';
import PropTypes from 'prop-types';

const BasicCard = ({ title, text, cardColor, links }) => {
  return (
    <div className='card blue-grey darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{title}</span>
        <p>{text}</p>
      </div>
      {links && (
        <div class='card-action'>
          <a href='#'>This is a link</a>
          <a href='#'>This is a link</a>
        </div>
      )}
    </div>
  );
};

BasicCard.propTypes = {};

export default BasicCard;
