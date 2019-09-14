import React, { Fragment } from 'react';
import BasicCard from '../layout/BasicCard';
import RevealCard from '../layout/RevealCard';
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
      <hr />
      {/**Content */}
      <div class='row'>
        <div class='col s6'>
          <BasicCard></BasicCard>
        </div>
        <div class='col s6'>
          <RevealCard></RevealCard>
        </div>
        <div class='col s6'></div>
      </div>
      <div class='row'>
        <div class='col s6'>
          <RevealCard></RevealCard>
        </div>
        <div class='col s6'>
          <BasicCard></BasicCard>
        </div>
      </div>
      {/**Content */}
    </div>
  </Fragment>
);

export default Home;
