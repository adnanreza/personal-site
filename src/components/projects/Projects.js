import React, { Fragment, useContext } from 'react';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';

import ProjectForm from './ProjectForm';
import ProjectFilter from './ProjectFilter';

export const Projects = () => {
  //Initialize context
  const projectContext = useContext(ProjectContext);

  const { projects, filtered } = projectContext;

  if (projects.length === 0) {
    return <h4>No Projects added yet</h4>;
  }

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
          <ProjectFilter></ProjectFilter>
          {/**Featured Projects */}
          <div className='row'>
            {filtered !== null
              ? filtered.map(project => (
                  <ProjectItem key={project.id} project={project}></ProjectItem>
                ))
              : projects.map(project => (
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
