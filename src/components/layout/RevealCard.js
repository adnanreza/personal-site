import React from 'react';
import { Link } from 'react-router-dom';

const RevealCard = ({ title, text, img, link, moreBtn, btnLink, altText, dark }) => {
  return (
    <div className={dark? 'card rv-card-dark' : 'card'}>
      <div className='card-image waves-effect waves-block waves-light'>
        <img className='activator' src={img} alt={altText} />
      </div>
      <div className='card-content'>
        <span className={`card-title activator text-darken-4 ${dark ? 'rv-card-dark':'grey-text'}`}>
          {title}
          <i className='material-icons right'>more_vert</i>
        </span>
        <p>
          <Link to={`${link}`}>More info...</Link>
        </p>
      </div>
      <div className={`card-reveal ${dark ? 'rv-card-dark':''}`}>
        <span className={`card-title text-darken-4 ${dark ? 'rv-card-dark':'grey-text'}`}>
          {title}
          <i className='material-icons right'>close</i>
        </span>
        <p className={`card-title text-darken-4 ${dark ? 'rv-card-dark':'grey-text'}`}>{text}</p>
        {moreBtn && (
          <div style={buttonLink}>
            <Link
              to={btnLink}
              className='waves-effect waves-light btn'
              style={buttonStyle}
            >
              <span className='network-name'>More...</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const buttonLink = {
  padding: '0.5rem 0.4rem',
  flexShrink: 1,
};

const buttonStyle = {
  borderRadius: '4px',
  backgroundColor: 'rgb(61, 59, 59)',
};

export default RevealCard;
