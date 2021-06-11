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
  "I currently teach Computer Science at Langara College in Vancouver, BC. I've also taught Web Development at the British Columbia Institute of Technology and Columbia College. I previously worked as a CS Graduate Teaching Assistant at the University of British Columbia.";
const projectsText =
  'I developed a few web apps recently (front-end: vanilla JS, React; full-stack: MERN stack, LAMP stack). You can find more about them by clicking the button below.';
const researchText =
  "My primary research interests lie at the interface between Computer Science and Microeconomics: Algorithmic Game Theory & Mechanism Design. I'm also interested in Reinforcement Learning and Applied Cryptography.";

const Home = () => (
  <Fragment>
    <div className='container' style={{ width: '90%' }}>
      <div className='topSection section center-align' style={topSectionStyle}>
        <h2>Adnan Reza</h2>
        <h5>Software Engineer and Computer Science Educator</h5>
        <br />
        <div className='row' style={buttonLinkContainer}>
          <div style={buttonLink}>
            <a
              href='https://github.com/adnanreza'
              className='waves-effect waves-light btn'
              target='_blank'
              rel='noopener noreferrer'
              style={buttonStyle}
            >
              <i className='fab fa-github'></i>{' '}
              <span className='network-name'>Github</span>
            </a>
          </div>
          <div style={buttonLink}>
            <Link
              to='/Resume'
              className='waves-effect waves-light btn'
              style={buttonStyle}
            >
              <i className='far fa-file'></i>{' '}
              <span className='network-name'>Résumé</span>
            </Link>
          </div>

          <div style={buttonLink}>
            <a
              href='https://www.linkedin.com/in/adnanreza'
              className='waves-effect waves-light btn'
              target='_blank'
              rel='noopener noreferrer'
              style={buttonStyle}
            >
              <i className='fab fa-linkedin'></i>{' '}
              <span className='network-name'>Linkedin</span>
            </a>
          </div>

          <div style={buttonLink}>
            <a
              href='https://blog.adnanreza.com/'
              className='waves-effect waves-light btn'
              target='_blank'
              rel='noopener noreferrer'
              style={buttonStyle}
            >
              <i className="fas fa-blog"></i>{' '}
              <span className='network-name'>Blog</span>
            </a>
          </div>
        </div>
      </div>
      <hr />

      {/**Cards */}
      <div className='row'>
        <div className='col s12 m6 l6'>
          <RevealCard
            title='Experience'
            text={experienceText}
            img={ExpImage}
            link='/Experience'
            moreBtn={true}
            btnLink='/Experience'
            altText='Experience'
          ></RevealCard>
        </div>
        <div className='col col s12 m6 l6'>
          <RevealCard
            title='Teaching'
            text={teachingText}
            img={TeachingImage}
            link='/Teaching'
            moreBtn={true}
            btnLink='/Teaching'
            altText='Board'
          ></RevealCard>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m6 l6'>
          <RevealCard
            title='Projects'
            text={projectsText}
            img={ProjectImage}
            link='/Projects'
            moreBtn={true}
            btnLink='/Projects'
            altText='code'
          ></RevealCard>
        </div>
        <div className='col s12 m6 l6'>
          <RevealCard
            title='Research'
            text={researchText}
            img={ResearchImage}
            link='#'
            altText='Research'
          ></RevealCard>
        </div>
      </div>
      {/**End Cards */}
    </div>
  </Fragment>
);

const topSectionStyle = {
  margin: '5rem 0',
};

const buttonLinkContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

const buttonLink = {
  padding: '0.5rem 0.4rem',
};

const buttonStyle = {
  borderRadius: '4px',
  backgroundColor: 'rgb(61, 59, 59)',
  transform: 'scale(1, 1)',
};

export default Home;
