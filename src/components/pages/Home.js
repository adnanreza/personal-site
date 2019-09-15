import React, { Fragment } from 'react';
import BasicCard from '../layout/BasicCard';
import RevealCard from '../layout/RevealCard';
import ImageCard from '../layout/ImageCard';
import BackgroundImg from '../layout/lake.jpg';
import ExpImage from '../layout/exp.png';
import TeachingImage from '../layout/chalkboard.jpg';
import ProjectImage from '../layout/code.jpg';
import ResearchImage from '../layout/algo.jpg';

const homeText = 'Computer Scientist';
const experienceText =
  "I'm currently working as a Programmer Analyst at UBC IT. I've recently worked as a Web Developer for PCPE, UBC Health where I was responsible for designing the Patients In Education website. I've also worked as a Web Developer for CALP at UBC. Previously, I co-founded Matroid Tech, where I focued on Full Stack Web Development.";
const teachingText =
  "I worked as a Graduate Teaching Assistant in CS at the University of British Columbia from 2015-18. I received a teaching award from UBC CS in May 2017. Previously, I've served as TA for both the departments of Computer Science and Economics at BRAC University from 2013-15.";
const projectsText =
  "I've completed several projects as part of my coursework during my BSc at BRAC University, and during my MSc at the University of British Columbia. You can find more about them here.";
const researchText =
  "My primary research interests lie at the interface between Computer Science and Microeconomics: Algorithmic Game Theory & Mechanism Design. I'm also interested in Reinforcement Learning and Applied Cryptography.";

const Home = () => (
  <Fragment>
    <div className='container' style={{ width: '90%' }}>
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
          <RevealCard
            title='Experience'
            text={experienceText}
            img={ExpImage}
          ></RevealCard>
        </div>
        <div className='col s6'>
          <RevealCard
            title='Teaching'
            text={teachingText}
            img={TeachingImage}
          ></RevealCard>
        </div>
        <div className='col s6'></div>
      </div>
      <div className='row'>
        <div className='col s6'>
          <RevealCard
            title='Projects'
            text={projectsText}
            img={ProjectImage}
          ></RevealCard>
        </div>
        <div className='col s6'>
          <RevealCard
            title='Research'
            text={researchText}
            img={ResearchImage}
          ></RevealCard>
        </div>
      </div>
      {/**End Cards */}
    </div>
  </Fragment>
);

export default Home;
