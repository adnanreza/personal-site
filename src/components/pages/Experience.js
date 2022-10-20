import React, { Fragment } from 'react';
import ResumeBlock from '../layout/ResumeBlock';
import { motion } from 'framer-motion'

const Experience = ({dark}) => {
  const accomplishmentsPA = [
    'Implemented web framework for UBC’s new common look and feel using Oracle PL/SQL, HTML5, CSS3, Bootstrap and JavaScript.',
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
  const accomplishmentsWDUBC2 = [
    'Performed comprehensive internal assessment of existing CALP websites.',
    'Recommended ways to reduce hosting costs by streamlining the number of hosting providers based on the bandwidth and technology stack needs of each project.',
    'Developed online case studies based on designs provided by CALP researchers.',
    'Maintained existing CALP websites.',
  ];
  const accomplishmentsMT = [
    'Designed, developed and deployed websites using HTML5/CSS3, JavaScript, PHP, MySQL, Apache.',
    'Communicated with clients, translated user requirements into working applications and ensured on-time delivery.',
    'Improved and modernized older websites.',
    'Recommended ways to simplify the process of maintaining their websites via on-site training.',
  ];

  const headingStyle = {
    padding: '0.5rem 1rem 1rem 0',
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }

  return (
    <Fragment>
      <motion.div className='container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        <div className='row'>
          <div className='col s12'>
            <h4 style={headingStyle}>
              <i className='fa fa-briefcase'></i>
              {` `}
              Software Development Experience
            </h4>
            <ResumeBlock
              heading='Programmer Analyst - University of British Columbia IT'
              subheading='June 2018 - July 2019'
              body={accomplishmentsPA}
              list={true}
              dark={dark}
            ></ResumeBlock>
            <ResumeBlock
              heading='Web Developer - UBC Health'
              subheading='January 2017 - April 2017'
              body={accomplishmentsWDUBC}
              list={true}
              dark={dark}
            ></ResumeBlock>
            <ResumeBlock
              heading='Web Developer - UBC Forestry'
              subheading='April 2017 - May 2017'
              body={accomplishmentsWDUBC2}
              list={true}
              dark={dark}
            ></ResumeBlock>
            <ResumeBlock
              heading='Full Stack Web Developer - Matroid Technologies'
              subheading='January 2014 - August 2015'
              body={accomplishmentsMT}
              list={true}
              dark={dark}
            ></ResumeBlock>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default Experience;
