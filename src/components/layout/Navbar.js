import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='blue lighten-1' style={{ padding: '0 2rem' }}>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Adnan Reza
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/Teaching'>Teaching</Link>
          </li>
          <li>
            <Link to='/Experience'>Experience</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link className='grey-text text-lighten-3' to='/Resume'>
              Resume
            </Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
