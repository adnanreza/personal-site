import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar-fixed'>
        <nav style={style}>
          <div className='nav-wrapper'>
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
                <Link to='/Resume'>Résumé</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
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

const style = {
  backgroundColor: '#3D3B3B'
};

export default Navbar;
