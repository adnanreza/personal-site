import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BasicCard = ({ title, text, cardColor, links, linkSet, linkText }) => {
  const array = Array.from(linkSet);

  return (
    <div className='card blue-grey darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{title}</span>
        <p>{text}</p>
      </div>
      {links && (
        <div class='card-action'>
          {array.map(item => (
            <Fragment>
              <a href={`${item}`} target='_blank'>
                {linkText}
              </a>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

BasicCard.propTypes = {};

export default BasicCard;
