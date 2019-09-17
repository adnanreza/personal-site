import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CC from '../layout/columbia-college.png';
import BU from '../layout/bracu.png';
import UBCCS from '../layout/ubccs.png';
import ResumeBlock from '../layout/ResumeBlock';

const Teaching = () => {
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
        <div className='col s12'>
          <h4>
            <i class='fas fa-chalkboard-teacher'></i>
            {` `}
            Teaching Experience
          </h4>

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

export default Teaching;
