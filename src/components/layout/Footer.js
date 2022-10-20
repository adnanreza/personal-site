import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({dark}) => {
  return (
    <footer className={dark ? 'page-footer-dark': 'page-footer-light'}>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Adnan Reza</h5>
            <p className='grey-text text-lighten-4'>
              Software Engineer and Computer Science Educator
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Links</h5>
            <ul>
              <li>
                <Link className='grey-text text-lighten-3' to='/Teaching'>
                  Teaching
                </Link>
              </li>
              <li>
                <Link className='grey-text text-lighten-3' to='/Experience'>
                  Experience
                </Link>
              </li>
              <li>
                <Link className='grey-text text-lighten-3' to='/Projects'>
                  Projects
                </Link>
              </li>
              <li>
                <Link className='grey-text text-lighten-3' to='/Resume'>
                  Resume
                </Link>
              </li>
              <li>
                <Link className='grey-text text-lighten-3' to='/Contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>© 2022 Adnan Reza</div>
      </div>
    </footer>
  );
};

export default Footer;
