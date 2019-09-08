import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='page-footer blue lighten-1'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>Footer Content</h5>
            <p className='grey-text text-lighten-4'>
              You can use rows and columns here to organize your footer content.
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
                <Link className='grey-text text-lighten-3' to='/Contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          © 2019 Adnan Reza
          <Link className='grey-text text-lighten-4 right' to='#!'>
            More Links
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
