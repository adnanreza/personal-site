import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleCheckbox from './ToggleCheckbox';

const Navbar = () => {

  return (
    <Fragment>
      <div className='navbar-fixed'>
        <nav style={navStyle}>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo'>
              AR
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
                <Link to='/Resume'>Résumé</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
              <li>
                <ToggleCheckbox></ToggleCheckbox>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/**Mobile Navigation*/}
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
          <Link to='/Resume'>Résumé</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
      {/**Mobile Navigation*/}
    </Fragment>
  );
};

const navStyle = {
  backgroundColor: '#3D3B3B',
  padding: '0 2rem'
};

export default Navbar;
