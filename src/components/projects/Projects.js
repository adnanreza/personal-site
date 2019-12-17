import React, { Fragment, useContext } from 'react';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';

import ProjectForm from './ProjectForm';

export const Projects = () => {
  //Initialize context
  const projectContext = useContext(ProjectContext);

  const { projects } = projectContext;

  return (
    <Fragment>
      <div className='container'>
        <ProjectForm></ProjectForm>
        <div className='row'>
          <h4 style={headingStyle}>
            <i className='fas fa-project-diagram'></i>
            {` `}
            Projects
          </h4>
          {/**Featured Projects */}
          <div className='row'>
            {projects.map(project => (
              <ProjectItem key={project.id} project={project}></ProjectItem>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const headingStyle = {
  padding: '0.5rem 1rem 1rem 0'
};

export default Projects;
