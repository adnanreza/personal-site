import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ title, dark, setDark }) => {
  
  return (
    <Fragment>
      <div className='navbar-fixed'>
        <nav className={dark ? 'navStyles-dark': 'navStyles'}>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo'>
              {title}
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
                <ThemeToggle dark={dark} setDark={setDark} mobile={false}/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/**Mobile Navigation*/}
      <ul className={`sidenav ${dark? 'sidenav-dark':''}`} id='mobile-demo'>
        <li className='mobileThemeToggleIcon'>
          <ThemeToggle dark={dark} setDark={setDark} mobile={true}/>
        </li>
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

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
