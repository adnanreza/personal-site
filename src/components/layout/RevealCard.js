import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RevealCard = ({ title, text, img, link }) => {
  return (
    <div className='card'>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={img} alt='' />
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
          <i className='material-icons right'>more_vert</i>
        </span>
        <p>
          <Link to={`${link}`}>More info...</Link>
        </p>
      </div>
      <div className='card-reveal'>
        <span className='card-title grey-text text-darken-4'>
          {title}
          <i className='material-icons right'>close</i>
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};

RevealCard.propTypes = {};

export default RevealCard;
