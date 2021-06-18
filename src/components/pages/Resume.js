import React, { Fragment } from 'react';
import TechnicalSkillsBlock from '../layout/TechnicalSkillsBlock';
import ResumeBlock from '../layout/ResumeBlock';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.75 }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Resume = (props) => {
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
      <span>{` `}</span>
      <a
        href='https://blog.adnanreza.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span style={{ color: 'black' }}>
          <i className='fas fa-blog fa-3x' style={badgeStyle}></i>
        </span>
      </a>
      <span>{` `}</span>
      <a
        href='mailto:adnan.reza@outlook.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span style={{ color: 'black' }}>
          <i className='fas fa-envelope fa-3x' style={badgeStyle}></i>
        </span>
      </a>
    </Fragment>
  );
  const summary = [
    'Full stack software engineer with multiple years of professional experience in several programming languages, frameworks, and environments.',
    'Skilled in translating business requirements into robust technical solutions that are delivered on time.',
    'Computer Science Instructor with 5+ years of experience teaching at the undergraduate level',
  ];
  const clientSide = 'JavaScript ES6, React, Redux, HTML5, CSS3, SASS';
  const serverSide = 'Java, PHP, Python, Node.js, Express.js, REST APIs, GraphQL';
  const databases = 'MySQL, Oracle, Postgres, MongoDB';
  const tools = 'Git, Docker, Kubernetes';
  const cloud = 'AWS EC2, S3, RDS, CloudFront, Elastic Beanstalk, Lambda, IAM';
  const testing = 'Jest, Enzyme, Postman';

  const accomplishmentsPA = [
    'Implemented web framework for UBC’s new common look and feel using Oracle PL/SQL, HTML5, CSS3 and JavaScript.',
    'Developed SQL queries for reporting sales data; Performed ad hoc reporting using Oracle SQL.',
    'Extracted, transformed and loaded data into Oracle database using Excel and SQL.',
    'Developed and maintained web pages using PHP, HTML5/CSS3, JavaScript (vanilla and jQuery).',
    'Documented database schemas and business logic using ER diagrams and flowcharts.',
  ];
  const accomplishmentsWDUBC = [
    'Designed and developed the Patients in Education (PIE) website using HTML5, CSS3 and JavaScript ES6.',
    'Deployed website to shared hosting service and configured DNS settings.',
    'Conducted needs assessment to identify features members want to see in the website.',
    'Created several design mock-ups, logos to get feedback from members.',
    'Implemented Google Analytics to track website statistics and audience behavior.',
    'Created documentation for easy website maintenance and updates in the future.',
  ];
  const accomplishmentsGTA = [
    'Designed, ran and managed laboratory and tutorial sessions.',
    'Designed, reviewed and graded assignments, projects and exams.',
    'Received a Graduate Teaching Assistant Award from the CS Department at UBC.',
  ];
  const accomplishmentsMT = [
    'Designed, developed and deployed websites using HTML5/CSS3, JavaScript, PHP, MySQL, Apache.',
    'Communicated with clients, translated user requirements into working applications and ensured on-time delivery.',
    'Improved and modernized older websites.',
    'Recommended ways to simplify the process of maintaining their websites via on-site training.',
  ];
  const accomplishmentsCC = [
    'Designed, ran and managed lectures and laboratory sessions for a diverse student body',
    'Designed, reviewed and graded assignments, projects and exams; Class size: 30-35',
    'Technologies used: HTML5, CSS3, JavaScript ES6, jQuery, PHP, MS Excel',
  ];
  const accomplishmentsBCIT = [
    'Designed and taught introductory and intermediate level full-stack web development courses for class sizes of 23-27 students',
    'Designed, reviewed and graded assignments, projects and exams',
    'Technologies used: HTML5, CSS3, JavaScript, jQuery, PHP, React, Node.js, Express, Redux, MySQL, MongoDB, Figma',
  ];
  const accomplishmentsLC = [
    'Designed and taught intermediate level full-stack web development courses for class sizes of 30-38 students',
    'Designed, reviewed and graded assignments, projects and exams',
    'Technologies used: CSS3 (Grid, Flexbox, Animations), JavaScript, jQuery, PHP, React, Node.js, Express, Redux, MySQL, MongoDB, WordPress',
    'Successfully transitioned course from in-person to full online delivery during COVID-19',
  ];

  return (
    <Fragment>
      <motion.div className='container' style={containerStyle} variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
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
                <TechnicalSkillsBlock
                  heading='Testing'
                  body={testing}
                  icon='hammer'
                ></TechnicalSkillsBlock>
              </div>
              <div className='col s12 m6 l6'>
                <TechnicalSkillsBlock
                  heading='Databases'
                  body={databases}
                  icon='database'
                ></TechnicalSkillsBlock>
                <TechnicalSkillsBlock
                  heading='Cloud Computing'
                  body={cloud}
                  icon='cloud'
                ></TechnicalSkillsBlock>
                <TechnicalSkillsBlock
                  heading='Tools'
                  body={tools}
                  icon='tools'
                ></TechnicalSkillsBlock>
              </div>
            </div>
          </div>
          {/**End Mid Section: Tech Skills */}

          {/**Start Section: Work Experience */}
          <div className='col s12 m12 l12'>
            <h4>
              <i className='fa fa-briefcase'></i>
              {` `}
              Recent Work Experience
            </h4>
            <ResumeBlock
              heading='Instructor, Web Development - Langara College'
              subheading='January 2020 - Present'
              body={accomplishmentsLC}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Instructor, Web Development - British Columbia Institute of Technology'
              subheading='August 2020 - April 2021'
              body={accomplishmentsBCIT}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Instructor, Computer Science - Columbia College'
              subheading='September 2019 - August 2020'
              body={accomplishmentsCC}
              list={true}
            ></ResumeBlock>
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
          </div>
          {/**End Section: Work Experience */}

          {/**Start Section: Honours & Awards */}
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
      </motion.div>
    </Fragment>
  );
};

const containerStyle = {
  width: '97%',
};

const badgeStyle = {
  paddingRight: '0.5rem',
};

export default Resume;
