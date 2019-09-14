import React, { Fragment } from 'react';
import BasicCard from '../layout/BasicCard';
import RevealCard from '../layout/RevealCard';
import SampleImage from '../layout/office.jpg';
import ExpImage from '../layout/exp.png';
import TeachingImage from '../layout/chalkboard.jpg';

const experienceText =
  "I'm currently working as a Programmer Analyst at UBC IT. I've recently worked as a Web Developer for PCPE, UBC Health where I was responsible for designing the Patients In Education website. I've also worked as a Web Developer for CALP at UBC. Previously, I co-founded Matroid Tech, where I focued on Full Stack Web Development.";
const teachingText =
  "I worked as a Graduate Teaching Assistant in CS at the University of British Columbia from 2015-18. I received a teaching award from UBC CS in May 2017. Previously, I've served as TA for both the departments of Computer Science and Economics at BRAC University from 2013-15.";

const Home = () => (
  <Fragment>
    <div className='container'>
      <div className='section center-align'>
        <h2>Adnan Reza</h2>
        <h5>Software Engineer and Computer Science Educator</h5>
        <br />
        <div classNameName='row'>
          <a
            href='https://github.com/adnanreza'
            className='waves-effect waves-light btn black'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>{' '}
            <span className='network-name'>Github</span>
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/adnanreza'
            className='waves-effect waves-light btn black'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin'></i>{' '}
            <span className='network-name'>Linkedin</span>
          </a>
        </div>
      </div>
      <hr />
      {/**Cards */}
      <div className='row'>
        <div className='col s6'>
          <BasicCard title='Experience' text={experienceText}></BasicCard>
        </div>
        <div className='col s6'>
          <RevealCard img={ExpImage}></RevealCard>
        </div>
        <div className='col s6'></div>
      </div>
      <div className='row'>
        <div className='col s6'>
          <RevealCard img={TeachingImage}></RevealCard>
        </div>
        <div className='col s6'>
          <BasicCard title='Teaching' text={teachingText}></BasicCard>
        </div>
      </div>
      {/**End Cards */}
    </div>
  </Fragment>
);

export default Home;
