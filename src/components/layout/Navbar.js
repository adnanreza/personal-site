import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Adnan Reza
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='sass.html'>Teaching</Link>
          </li>
          <li>
            <Link to='badges.html'>Experience</Link>
          </li>
          <li>
            <Link to='collapsible.html'>Projects</Link>
          </li>
          <li>
            <Link to='collapsible.html'>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
