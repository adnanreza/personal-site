import React from 'react';
import PropTypes from 'prop-types';

const ResumeBlock = ({ heading, subheading, buttons, body, list, links }) => {
  const array = Array.from(body);

  return (
    <div style={style} className='card darken-1'>
      <div className='card-content'>
        <span className='card-title'>{heading}</span>
        <span>{subheading}</span>
        <br />
        <br />
        {buttons && (
          <div className='row' style={buttonsRow}>
            {buttons}
          </div>
        )}
        {list ? (
          <ul className='accomplishments'>
            {array.map((item, index) => (
              <li key={index}>
                <i className='far fa-check-circle'></i>
                {`  `}
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div>{body}</div>
        )}
      </div>
      {links && (
        <div className='card-action'>
          <a href='#'>This is a link</a>
          <a href='#'>This is a link</a>
        </div>
      )}
    </div>
  );
};

const style = {
  backgroundColor: 'rgba(243, 246, 247, 1)'
};

const buttonsRow = {
  padding: '0 10px'
};

ResumeBlock.propTypes = {};

export default ResumeBlock;
