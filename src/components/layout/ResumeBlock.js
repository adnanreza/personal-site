import React from 'react';
import PropTypes from 'prop-types';

const ResumeBlock = props => {
  return (
    <div class='card blue-grey darken-1'>
      <div class='card-content white-text'>
        <span class='card-title'>{props.heading}</span>
        <span>{props.subheading}</span>
        <ul>{props.body}</ul>
      </div>
      <div class='card-action'>
        <a href='#'>This is a link</a>
        <a href='#'>This is a link</a>
      </div>
    </div>
  );
};

ResumeBlock.propTypes = {};

export default ResumeBlock;
