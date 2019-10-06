import React, { Fragment } from 'react';
import ResumeBlock from '../layout/ResumeBlock';

const Projects = () => {
  
  const devBook = [
    'A social network for developers built using the MERN stack.'
  ];
  const contactOrganizer = [
    'A contacts organizer built using MERN stack'
  ];
  const calTracker = [
    'A calories tracker app built using vanilla JS using the module pattern'
  ];
  const chickenRun = [
    'ChickenRun is a web crawler written in PHP with a MySQL database.'
  ];

  const headingStyle = {
    padding: '0.5rem 1rem 1rem 0'
  };

  return (
    <Fragment>
      <div className='container'>
        <div class='row'>
          <h4 style={headingStyle}>
            <i class='fas fa-project-diagram'></i>
            {` `}
            Projects
          </h4>
          <ResumeBlock
            heading='devBook'
            subheading={devBook}
            body={devBook}
            list={true}
          ></ResumeBlock>
          <ResumeBlock
            heading='contactOrganizer'
            subheading={contactOrganizer}
            body={contactOrganizer}
            list={true}
          ></ResumeBlock>
          <ResumeBlock
            heading='calTracker'
            subheading={calTracker}
            body={calTracker}
            list={true}
          ></ResumeBlock>
          <ResumeBlock
            heading='chickenRun'
            subheading={chickenRun}
            body={chickenRun}
            list={true}
          ></ResumeBlock>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
