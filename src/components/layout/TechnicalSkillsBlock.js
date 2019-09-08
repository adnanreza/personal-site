import React from 'react';
import PropTypes from 'prop-types';

const TechnicalSkillsBlock = props => {
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
            <span class='card-title'>{props.heading}</span>
            <ul>{props.body}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TechnicalSkillsBlock.propTypes = {
  heading: PropTypes.string.isRequired
};

export default TechnicalSkillsBlock;
