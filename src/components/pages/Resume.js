import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TechnicalSkillsBlock from '../layout/TechnicalSkillsBlock';
import ResumeBlock from '../layout/ResumeBlock';

const Resume = props => {
  const buttonsContact = (
    <Fragment>
      <a
        href='https://www.linkedin.com/in/adnanreza'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span style={{ color: 'black' }}>
          <i className='fab fa-linkedin fa-3x' style={badgeStyle}></i>
        </span>
      </a>
      <span>{` `}</span>
      <a
        href='https://github.com/adnanreza'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span style={{ color: 'black' }}>
          <i className='fab fa-github fa-3x' style={badgeStyle}></i>
        </span>
      </a>
    </Fragment>
  );
  const summary = [
    'Full stack software engineer with 2 years of professional experience in several programming languages, frameworks, and environments.',
    'Skilled in translating business requirements into robust technical solutions that are delivered on time.'
  ];
  const clientSide = 'JavaScript ES6, React, Redux, HTML5, CSS3, SASS';
  const serverSide = 'Java, PHP, Python, Node.js, Express.js, REST, MVC';
  const databases = 'MySQL, Oracle, Postgres, MongoDB';
  const tools = 'Git, AWS, GCP, Heroku, Netlify';

  const accomplishmentsPA = [
    'Implemented web framework for UBC’s new common look and feel using Oracle PL/SQL, HTML5, CSS3 and JavaScript.',
    'Developed SQL queries for reporting sales data; Performed ad hoc reporting using Oracle SQL.',
    'Extracted, transformed and loaded data into Oracle database using Excel and SQL.',
    'Developed and maintained web pages using PHP, HTML5/CSS3, JavaScript (vanilla and jQuery).',
    'Documented database schemas and business logic using ER diagrams and flowcharts.'
  ];
  const accomplishmentsWDUBC = [
    'Designed and developed the Patients in Education (PIE) website using HTML5, CSS3 and JavaScript ES6.',
    'Deployed website to shared hosting service and configured DNS settings.',
    'Conducted needs assessment to identify features members want to see in the website.',
    'Created several design mock-ups, logos to get feedback from members.',
    'Implemented Google Analytics to track website statistics and audience behavior.',
    'Created documentation for easy website maintenance and updates in the future.'
  ];
  const accomplishmentsGTA = [
    'Designed, ran and managed laboratory and tutorial sessions.',
    'Designed, reviewed and graded assignments, projects and exams.',
    'Received a Graduate Teaching Assistant Award from the CS Department at UBC.'
  ];
  const accomplishmentsMT = [
    'Designed, developed and deployed websites using HTML5/CSS3, JavaScript, PHP, MySQL, Apache.',
    'Communicated with clients, translated user requirements into working applications and ensured on-time delivery.',
    'Improved and modernized older websites.',
    'Recommended ways to simplify the process of maintaining their websites via on-site training.'
  ];
  const accomplishmentsTABRAC = [
    'Graded programs, quizzes and assignments.',
    'Conducted tutorial sessions on an individual and group basis.',
    'Helped students with course material during office hours.',
    'Identified weak students and held extra sessions to improve their performance.',
    'Discussed advanced topics not covered in lectures.'
  ];

  return (
    <Fragment>
      <div className='container' style={containerStyle}>
        <div className='row'>
          {/**Top Section: Contact Info + Education */}
          <div className='col s12 m12 l12'>
            <div className='row'>
              <div className='col s12 m6 l6'>
                <h4>
                  <i className='fa fa-id-card'></i>
                  {` `}
                  Contact Info
                </h4>
                <ResumeBlock
                  heading='Adnan Reza'
                  subheading='Vancouver, BC'
                  buttons={buttonsContact}
                  body={summary}
                  list={true}
                ></ResumeBlock>
              </div>
              <div className='col s12 m6 l6'>
                <h4>
                  <i className='fa fa-university'></i>
                  {` `}
                  Education
                </h4>
                <ResumeBlock
                  heading='MSc in Computer Science'
                  subheading='University of British Columbia, Vancouver, BC'
                  body=''
                  list={false}
                ></ResumeBlock>
                <ResumeBlock
                  heading='BSc in Computer Science, Economics'
                  subheading='BRAC University, Dhaka, Bangladesh'
                  body=''
                  list={false}
                ></ResumeBlock>
              </div>
            </div>
          </div>
          {/**End Top Section: Contact Info + Education */}

          {/**Mid Section: Tech Skills */}
          <div className='col s12 m12 l12'>
            <div className='row'>
              <div className='col s12 m12 l12'>
                <h4>
                  <i className='fa fa-code'></i>
                  {` `}
                  Technical Skills
                </h4>
              </div>
              <div className='col s12 m6 l6'>
                <TechnicalSkillsBlock
                  heading='Client Side'
                  body={clientSide}
                  icon='desktop'
                ></TechnicalSkillsBlock>
                <TechnicalSkillsBlock
                  heading='Server Side'
                  body={serverSide}
                  icon='server'
                ></TechnicalSkillsBlock>
              </div>
              <div className='col s12 m6 l6'>
                <TechnicalSkillsBlock
                  heading='Databases'
                  body={databases}
                  icon='database'
                ></TechnicalSkillsBlock>
                <TechnicalSkillsBlock
                  heading='Build and Deployment'
                  body={tools}
                  icon='tools'
                ></TechnicalSkillsBlock>
              </div>
            </div>
          </div>
          {/**End Mid Section: Tech Skills */}

          {/**End Section: Work Experience */}
          <div className='col s12 m12 l12'>
            <h4>
              <i className='fa fa-briefcase'></i>
              {` `}
              Work Experience
            </h4>
            <ResumeBlock
              heading='Programmer Analyst - University of British Columbia IT'
              subheading='June 2018 - July 2019'
              body={accomplishmentsPA}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Graduate Teaching Assistant - UBC Computer Science Department'
              subheading='September 2015 - April 2018'
              body={accomplishmentsGTA}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Web Developer - UBC Health'
              subheading='January 2017 - April 2017'
              body={accomplishmentsWDUBC}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Full Stack Web Developer - Matroid Technologies'
              subheading='January 2014 - August 2015'
              body={accomplishmentsMT}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Teaching Assistant - BRAC University'
              subheading='January 2013 - July 2015'
              body={accomplishmentsTABRAC}
              list={true}
            ></ResumeBlock>
          </div>
          {/**End Section: Work Experience */}

          {/**End Section: Honours & Awards */}
          <div className='col s12 m12 l12'>
            <div className='row'>
              <div className='col s12 m12 l12'>
                <h4>
                  <i className='fa fa-award'></i>
                  {` `}
                  Honours and Awards
                </h4>
              </div>
              <div className='col s12 m6 l6'>
                <ResumeBlock
                  heading='Graduate Teaching Assistant Award'
                  subheading='University of British Columbia, Vancouver, BC'
                  body=''
                  list={false}
                ></ResumeBlock>
                <ResumeBlock
                  heading={`Vice Chancellor's Medal`}
                  subheading='BRAC University, Dhaka, Bangladesh'
                  body=''
                  list={false}
                ></ResumeBlock>
              </div>
              <div className='col s12 m6 l6'>
                <ResumeBlock
                  heading={`Vice Chancellor's List (6 semesters)`}
                  subheading='BRAC University, Dhaka, Bangladesh'
                  body=''
                  list={false}
                ></ResumeBlock>
                <ResumeBlock
                  heading={`Dean's List (4 semesters)`}
                  subheading='BRAC University, Dhaka, Bangladesh'
                  body=''
                  list={false}
                ></ResumeBlock>
              </div>
            </div>
          </div>
          {/**End Honours & Awards*/}
        </div>
      </div>
    </Fragment>
  );
};

const containerStyle = {
  width: '97%'
};

const badgeStyle = {
  paddingRight: '0.5rem'
};

Resume.propTypes = {};

export default Resume;
