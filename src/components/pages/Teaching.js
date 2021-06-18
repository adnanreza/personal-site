import React, { Fragment } from 'react';
import ResumeBlock from '../layout/ResumeBlock';
import { motion } from 'framer-motion'

const Teaching = () => {
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
  const accomplishmentsCC = [
    'Designed and taught introductory CS and web development for a diverse student body (CS + Non CS majors)',
    'Designed, reviewed and graded assignments, projects and exams; Class size: 30-38',
    'Technologies used: HTML5, CSS3, JavaScript ES6, jQuery, PHP, MS Excel',
    'Successfully transitioned course from in-person to full online delivery during COVID-19',
  ];
  const accomplishmentsGTA = [
    'Designed, ran and managed laboratory and tutorial sessions',
    'Designed, reviewed and graded assignments, projects and exams',
    'Received a Graduate Teaching Assistant Award from the CS Department at UBC',
  ];
  const accomplishmentsAG = [
    'Mentored potential CS graduate students',
    'Held weekly one-on-one sessions focusing on the application process to CS graduate schools',
    'Conducted interview practice sessions and helped students improve their communication skills',
    'Advised on CS graduate school course selection',
    'Guided students in post-degree career options',
  ];
  const accomplishmentsTABRACECON = [
    'Graded programs, quizzes and assignments.',
    'Conducted tutorial sessions on an individual and group basis',
    'Helped students with course material during office hours.',
    'Identified weak students and held extra sessions to improve their performance',
    'Discussed advanced topics not covered in lectures',
  ];
  const accomplishmentsTABRACCSE = [
    'Held office hours and conducted tutorial sessions on an individual and group basis',
    'Assigned problem sets and provided feedback on performance',
    'Identified weak students and held extra sessions to improve their performance',
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
              <i className='fas fa-chalkboard-teacher'></i>
              {` `}
              Teaching Experience
            </h4>

            <ResumeBlock
              heading='Instructor, Web Development - Langara College'
              subheading='January 2020 - Present'
              body={accomplishmentsLC}
              list={true}
            ></ResumeBlock>

            <ResumeBlock
              heading='Instructor, Web Development - BCIT'
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
              heading='Graduate Teaching Assistant - UBC Computer Science Department'
              subheading='September 2015 - April 2018'
              body={accomplishmentsGTA}
              list={true}
            ></ResumeBlock>

            <ResumeBlock
              heading='Academic Guide - UBC Extended Learning'
              subheading='January 2017 - December 2017; September 2019 - Present'
              body={accomplishmentsAG}
              list={true}
            ></ResumeBlock>

            <ResumeBlock
              heading='Teaching Assistant (Economics) - BRAC University'
              subheading='February 2014 - July 2015'
              body={accomplishmentsTABRACECON}
              list={true}
            ></ResumeBlock>

            <ResumeBlock
              heading='Teaching Assistant (Computer Science) - BRAC University'
              subheading='January 2013 - December 2014'
              body={accomplishmentsTABRACCSE}
              list={true}
            ></ResumeBlock>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default Teaching;
