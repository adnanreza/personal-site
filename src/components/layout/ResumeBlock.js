import React from 'react';
import PropTypes from 'prop-types';

const ResumeBlock = ({ heading, subheading, buttons, body, list }) => {
  const array = Array.from(body);

  return (
    <div className='card blue-grey darken-1'>
      <div className='card-content white-text'>
        <span className='card-title'>{heading}</span>
        <span>{subheading}</span>
        <br />
        <br />
        {buttons && <span>{buttons}</span>}
        {list ? (
          <ul className='accomplishments'>
            {array.map((item, index) => (
              <li key={index}>
                <i className='fas fa-check'></i>
                {`  `}
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div>{body}</div>
        )}
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
