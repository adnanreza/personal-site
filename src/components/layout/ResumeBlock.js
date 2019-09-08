import React from 'react';
import PropTypes from 'prop-types';

const ResumeBlock = props => {
  return (
    <div className='card blue-grey darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{props.heading}</span>
        <span>{props.subheading}</span>
        <br />
        <br />
        {props.buttons && <span>{props.buttons}</span>}
        <ul>{props.body}</ul>
      </div>
      <div className='card-action'>
        <a href='#'>This is a link</a>
        <a href='#'>This is a link</a>
      </div>
    </div>
  );
};

ResumeBlock.propTypes = {};

export default ResumeBlock;
