import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TechnicalSkillsBlock from '../layout/TechnicalSkillsBlock';
import ResumeBlock from '../layout/ResumeBlock';

const Resume = props => {
  const buttonsContact = (
    <button className='btn'>
      <i className='fab fa-linkedin'></i>
    </button>
  );
  const summary =
    'Full stack software engineer with 2 years of professional experience in several programming languages, frameworks, and environments. Skilled in translating business requirements into robust technical solutions that are delivered on time. Currently seeking a position working with the latest JavaScript web stack, including React/Redux/GraphQL Node.js, Express, MongoDB, PostgreSQL/MySQL.';
  const accomplishmentsPA = [
    'Implemented web framework for UBC’s new common look and feel using Oracle PL/SQL, HTML5, CSS3, Bootstrap and JavaScript.',
    'Developed SQL queries for reporting sales data; Performed ad hoc reporting using Oracle SQL.',
    'Extracted, transformed and loaded data into Oracle database using Excel and SQL.',
    'Developed and maintained web pages using PHP, HTML5/CSS3, JavaScript (vanilla and jQuery).',
    'Documented database schemas and business logic using ER diagrams and flowcharts.'
  ];
  const accomplishmentsWDUBC = [
    'Designed the Patients in Education (PIE) Website',
    'Conducted needs assessment to identify features members want to see in the website',
    'Created several design mock-ups, logos to get feedback from members.',
    'Implemented Google Analytics to track website statistics and audience behavior.',
    'Created documentation for easy website maintenance and updates in the future.'
  ];
  const accomplishmentsGTA = [
    'Designed, ran and managed laboratory and tutorial sessions',
    'Designed, reviewed and graded assignments, projects and exams',
    'Received a Graduate Teaching Assistant Award from the CS Department at UBC'
  ];
  const accomplishmentsAG = [
    'Mentored potential CS graduate students',
    'Held weekly one-on-one sessions focusing on the application process to CS graduate schools',
    'Conducted interview practice sessions and helped students improve their communication skills',
    'Advised on CS graduate school course selection',
    'Guided students in post-degree career options'
  ];
  const accomplishmentsMT = [
    'Full Stack Web Development using HTML5/CSS3, JavaScript, PHP and MySQL.',
    'Communicated with clients, translated user requirements into working applications and ensured on-time delivery.',
    'Improved and modernized older websites.',
    'Recommended ways to simplify the process of maintaining their websites via on-site training.'
  ];
  const accomplishmentsTABRAC = [
    'Graded programs, quizzes and assignments.',
    'Conducted tutorial sessions on an individual and group basis',
    'Helped students with course material during office hours.',
    'Identified weak students and held extra sessions to improve their performance',
    'Discussed advanced topics not covered in lectures'
  ];

  return (
    <Fragment>
      <div className='row'>
        <div className='col s3'>
          <ResumeBlock
            heading='Adnan Reza'
            subheading='Vancouver, BC'
            buttons={buttonsContact}
            body={summary}
            list={false}
          ></ResumeBlock>
        </div>
        <div className='col s9'>
          <h4>
            <i className='fa fa-code'></i>
            {` `}
            Technical Skills
          </h4>
          <TechnicalSkillsBlock
            heading='Languages and Frameworks'
            body={accomplishmentsPA}
          ></TechnicalSkillsBlock>

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
            heading='Academic Guide - UBC Extended Learning'
            subheading='January 2017 - December 2017'
            body={accomplishmentsAG}
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
      </div>
    </Fragment>
  );
};

Resume.propTypes = {};

export default Resume;
