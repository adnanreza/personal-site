import React, { Fragment } from 'react';
import SampleImage from '../layout/office.jpg';

const Home = () => (
  <Fragment>
    <div className='container'>
      <div class='section center-align'>
        <h2>Adnan Reza</h2>
        <h5>Software Engineer and Computer Science Educator</h5>
        <br />
        <div className='row'>
          <a
            href='https://github.com/adnanreza'
            class='waves-effect waves-light btn black'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-github'></i>{' '}
            <span class='network-name'>Github</span>
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/adnanreza'
            class='waves-effect waves-light btn black'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-linkedin'></i>{' '}
            <span class='network-name'>Linkedin</span>
          </a>
        </div>
      </div>
      <div class='divider'></div>
    </div>
  </Fragment>
);

export default Home;
