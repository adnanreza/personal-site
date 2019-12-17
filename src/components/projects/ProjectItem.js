import React, { Fragment } from 'react';
import ResumeBlock from '../layout/ResumeBlock';
import PropTypes from 'prop-types';

const ProjectItem = ({ project }) => {
  const { heading, subheading, body, gitLink, demoLink, techStack } = project;
  return (
    <Fragment>
      <div className='col s12 m12 l12'>
        <ResumeBlock
          heading={heading}
          subheading={subheading}
          body={body}
          list={true}
          links={true}
          gitLink={gitLink}
          demoLink={demoLink}
          techStack={techStack}
        ></ResumeBlock>
      </div>
    </Fragment>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectItem;
