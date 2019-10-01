import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RevealCard from '../layout/RevealCard';
import ExpImage from '../layout/4.png';
import TeachingImage from '../layout/1.jpg';
import ProjectImage from '../layout/3.jpg';
import ResearchImage from '../layout/2.jpg';

const experienceText =
  "My most recent full-time industry role was as a Programmer Analyst at UBC IT. I've also worked as a Web Developer for PCPE, UBC Health where I was responsible for designing the Patients In Education website. I've also worked as a Web Developer for CALP at UBC.";
const teachingText =
  "I'm currently a Computer Science Instructor at Columbia College in Vancouver, BC. I previously worked as a Graduate Teaching Assistant at the University of British Columbia from 2015-18. I received a teaching award from UBC CS in May 2017. Previously, I've served as TA for both the departments of Computer Science and Economics at BRAC University from 2013-15.";
const projectsText =
  "I've completed several projects as part of my coursework during my BSc at BRAC University, and during my MSc at the University of British Columbia. You can find more about them here.";
const researchText =
  "My primary research interests lie at the interface between Computer Science and Microeconomics: Algorithmic Game Theory & Mechanism Design. I'm also interested in Reinforcement Learning and Applied Cryptography.";

const Home = () => (
  <Fragment>
    <div className='container' style={{ width: '90%' }}>
      <div className='topSection section center-align' style={topSectionStyle}>
        <h2>Adnan Reza</h2>
        <h5>Software Engineer and Computer Science Educator</h5>
        <br />
        <div className='row'>
          <a
            href='https://github.com/adnanreza'
            className='waves-effect waves-light btn black'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>{' '}
            <span className='network-name'>Github</span>
          </a>{' '}
          <Link to='/Resume' className='waves-effect waves-light btn black'>
            <i className='far fa-file'></i>{' '}
            <span className='network-name'>Résumé</span>
          </Link>{' '}
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
        <div className='col s12 m12 l6'>
          <RevealCard
            title='Experience'
            text={experienceText}
            img={ExpImage}
            link='/Experience'
          ></RevealCard>
        </div>
        <div className='col col s12 m12 l6'>
          <RevealCard
            title='Teaching'
            text={teachingText}
            img={TeachingImage}
            link='/Teaching'
          ></RevealCard>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m12 l6'>
          <RevealCard
            title='Projects'
            text={projectsText}
            img={ProjectImage}
            link='/Projects'
          ></RevealCard>
        </div>
        <div className='col s12 m12 l6'>
          <RevealCard
            title='Research'
            text={researchText}
            img={ResearchImage}
            link='#'
          ></RevealCard>
        </div>
      </div>
      {/**End Cards */}
    </div>
  </Fragment>
);

const topSectionStyle = {
  margin: '5rem 0'
};

export default Home;
