import React from 'react';
import PropTypes from 'prop-types';

const TechnicalSkillsBlock = ({ body, heading }) => {
  return (
    <div class='card blue-grey darken-1'>
      <div class='card-content white-text'>
        <div className='row'>
          <div className='col s1'>
            <span className='center-align'>
              <i className='fa fa-code fa-2x'></i>
            </span>
          </div>
          <div className='col s11'>
            <span class='card-title'>{heading}</span>
            <ul>{body}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TechnicalSkillsBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string
};

export default TechnicalSkillsBlock;
