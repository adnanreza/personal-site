import React from 'react';
import PropTypes from 'prop-types';

const TechnicalSkillsBlock = ({ body, heading, icon, dark }) => {
  return (
    <div className={dark ? 'card darken-1 cardAnimation-dark' : 'card darken-1 cardAnimation'}>
      <div style={cardContentStyle} className='card-content'>
        <div className='row'>
          <div className='col s2'>
            <span className='center-align' style={{ position: 'relative' }}>
              <i
                className={`fa fa-${icon} fa-2x iconPos`}
                style={{ padding: '0.22rem 0.8rem' }}
              ></i>
            </span>
          </div>
          <div className='col s10'>
            <span className='card-title'>{heading}</span>
            <span>{body}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardContentStyle = {
  padding: '0.2rem',
};

TechnicalSkillsBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default TechnicalSkillsBlock;
