import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ResumeBlock from '../layout/ResumeBlock';

const Resume = props => {
  const accomplishmentsPA = [
    'Implemented web framework for UBC’s new common look and feel using Oracle PL/SQL, HTML5, CSS3, Bootstrap and JavaScript.',
    'Developed SQL queries for reporting sales data; Performed ad hoc reporting using Oracle SQL.',
    'Extracted, transformed and loaded data into Oracle database using Excel and SQL.',
    'Developed and maintained web pages using PHP, HTML5/CSS3, JavaScript (vanilla and jQuery).',
    'Documented database schemas and business logic using ER diagrams and flowcharts.'
  ];
  const accomplishmentsGTA = [
    'Implemented web framework for UBC’s new common look and feel using Oracle PL/SQL, HTML5, CSS3, Bootstrap and JavaScript.',
    'Developed SQL queries for reporting sales data; Performed ad hoc reporting using Oracle SQL.',
    'Extracted, transformed and loaded data into Oracle database using Excel and SQL.',
    'Developed and maintained web pages using PHP, HTML5/CSS3, JavaScript (vanilla and jQuery).',
    'Documented database schemas and business logic using ER diagrams and flowcharts.'
  ];

  return (
    <Fragment>
      <div className='row'>
        <div className='col s3'>
          <ResumeBlock
            heading='Adnan Reza'
            subheading='Vancouver, BC'
            body='Full stack software engineer with 2 years of professional
            experience in several programming languages, frameworks, and
            environments. Skilled in translating business requirements into
            robust technical solutions that are delivered on time. Currently
            seeking a position working with the latest JavaScript web stack,
            including React/Redux/GraphQL, Node.js, Express, MongoDB,
            PostgreSQL/MySQL.'
          ></ResumeBlock>
        </div>
        <div className='col s9'>
          <h4>
            <i className='fa fa-briefcase'></i>
            {` `}
            Work Experience
          </h4>
          <ResumeBlock
            heading='Programmer Analyst - University of British Columbia'
            subheading='June 2018 - July 2019'
            body={accomplishmentsPA}
          ></ResumeBlock>

          <h4>
            <i className='fa fa-briefcase'></i>
            {` `}
            Work Experience
          </h4>
          <ResumeBlock
            heading='Programmer Analyst - University of British Columbia'
            subheading='June 2018 - July 2019'
            body={accomplishmentsPA}
          ></ResumeBlock>
          <ResumeBlock
            heading='Graduate Teaching Assistant - University of British Columbia'
            subheading='September 2015 - April 2018'
            body={accomplishmentsGTA}
          ></ResumeBlock>
        </div>
      </div>
    </Fragment>
  );
};

Resume.propTypes = {};

export default Resume;
