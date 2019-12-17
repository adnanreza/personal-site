import React, { Fragment, useContext } from 'react';
import ResumeBlock from '../layout/ResumeBlock';
import PropTypes from 'prop-types';
import ProjectContext from '../../context/project/projectContext';

const ProjectItem = ({ project }) => {
  const projectContext = useContext(ProjectContext);

  const { deleteProject, setCurrent, clearCurrent } = projectContext;

  const {
    id,
    heading,
    subheading,
    body,
    gitLink,
    demoLink,
    techStack
  } = project;

  const onDelete = () => {
    deleteProject(id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(project);
  };

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
          editButton={true}
          deleteButton={true}
          onDelete={onDelete}
          onEdit={onEdit}
        ></ResumeBlock>
      </div>
    </Fragment>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectItem;
