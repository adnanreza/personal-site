import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ResumeBlock from '../layout/ResumeBlock';

const Experience = () => {
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
  const accomplishmentsWDUBC2 = [
    'Performed comprehensive internal assessment of existing CALP websites',
    'Recommended ways to reduce hosting costs by streamlining the number of hosting providers based on the bandwidth and technology stack needs of each project.',
    'Developed online case studies based on designs provided by CALP researchers.',
    'Maintained existing CALP websites'
  ];
  const accomplishmentsMT = [
    'Full Stack Web Development using HTML5/CSS3, JavaScript, PHP and MySQL.',
    'Communicated with clients, translated user requirements into working applications and ensured on-time delivery.',
    'Improved and modernized older websites.',
    'Recommended ways to simplify the process of maintaining their websites via on-site training.'
  ];

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h4>
              <i className='fa fa-briefcase'></i>
              {` `}
              Software Development Experience
            </h4>
            <ResumeBlock
              heading='Programmer Analyst - University of British Columbia IT'
              subheading='June 2018 - July 2019'
              body={accomplishmentsPA}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Web Developer - UBC Health'
              subheading='January 2017 - April 2017'
              body={accomplishmentsWDUBC}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Web Developer - UBC Forestry'
              subheading='April 2017 - May 2017'
              body={accomplishmentsWDUBC2}
              list={true}
            ></ResumeBlock>
            <ResumeBlock
              heading='Full Stack Web Developer - Matroid Technologies'
              subheading='January 2014 - August 2015'
              body={accomplishmentsMT}
              list={true}
            ></ResumeBlock>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
