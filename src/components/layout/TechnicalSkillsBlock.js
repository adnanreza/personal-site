import React from 'react';
import PropTypes from 'prop-types';

const TechnicalSkillsBlock = ({ body, heading, icon }) => {
  return (
    <div style={style} class='card darken-1'>
      <div style={cardContentStyle} class='card-content'>
        <div className='row'>
          <div className='col s1'>
            <span className='center-align'>
              <i
                className={`fa fa-${icon} fa-2x`}
                style={{ paddingTop: '0.22rem', paddingLeft: '0.8rem' }}
              ></i>
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

const style = {
  backgroundColor: 'rgba(243, 246, 247, 1)'
};

const cardContentStyle = {
  padding: '0.2rem'
};

TechnicalSkillsBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string
};

export default TechnicalSkillsBlock;
