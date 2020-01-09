import React, { Fragment } from 'react';
import ResumeBlock from '../layout/ResumeBlock';

const Teaching = () => {
  const accomplishmentsLC = [
    'I will be teaching an intermediate web development course'
  ];
  const accomplishmentsCC = [
    'Designed and taught an introductory CS course for a diverse student body (CS + Non CS majors)',
    'Designed, reviewed and graded assignments, projects and exams',
    'I will be teaching an introductory web development course in Winter 2020'
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
  const accomplishmentsTABRACECON = [
    'Graded programs, quizzes and assignments.',
    'Conducted tutorial sessions on an individual and group basis',
    'Helped students with course material during office hours.',
    'Identified weak students and held extra sessions to improve their performance',
    'Discussed advanced topics not covered in lectures'
  ];
  const accomplishmentsTABRACCSE = [
    'Held office hours and conducted tutorial sessions on an individual and group basis',
    'Assigned problem sets and provided feedback on performance',
    'Identified weak students and held extra sessions to improve their performance'
  ];

  const headingStyle = {
    padding: '0.5rem 1rem 1rem 0'
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h4 style={headingStyle}>
              <i className='fas fa-chalkboard-teacher'></i>
              {` `}
              Teaching Experience
            </h4>

            <ResumeBlock
              heading='Computer Science Instructor - Langara College'
              subheading='January 2020 - Present'
              body={accomplishmentsLC}
              list={true}
            ></ResumeBlock>

            <ResumeBlock
              heading='Computer Science Instructor - Columbia College'
              subheading='September 2019 - Present'
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
      </div>
    </Fragment>
  );
};

export default Teaching;
