import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper black'>
        <Link to='/' className='brand-logo' style={{ padding: '0 20px' }}>
          Adnan Reza
        </Link>
        <Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </Link>
        <ul className='right hide-on-med-and-down'>
          <li>
            <Link to='/Experience'>Experience</Link>
          </li>
          <li>
            <Link to='/Teaching'>Teaching</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link to='/Resume'>Resume</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
        <ul className='sidenav' id='mobile-demo'>
          <li>
            <Link to='/Experience'>Experience</Link>
          </li>
          <li>
            <Link to='/Teaching'>Teaching</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link to='/Resume'>Resume</Link>
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
