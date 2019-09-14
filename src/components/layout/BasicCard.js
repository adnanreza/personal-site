import React from 'react';
import PropTypes from 'prop-types';

const BasicCard = ({ title, text, links }) => {
  return (
    <div className='card blue-grey darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{title}</span>
        <p>{text}</p>
      </div>
      {links && (
        <a className='card-action'>
          <a href='#'>This is a link</a>
          <a href='#'>This is a link</a>
        </a>
      )}
    </div>
  );
};

BasicCard.propTypes = {};

export default BasicCard;
