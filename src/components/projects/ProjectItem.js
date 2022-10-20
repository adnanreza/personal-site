import React, { useContext } from 'react';
import ResumeBlock from '../layout/ResumeBlock';
import PropTypes from 'prop-types';
import ProjectContext from '../../context/project/projectContext';

const ProjectItem = ({ project, dark }) => {
  const projectContext = useContext(ProjectContext);

  const { deleteProject, setCurrent, clearCurrent } = projectContext;

  const {
    id,
    heading,
    subheading,
    body,
    gitLink,
    demoLink,
    techStack,
    docLink1,
    docLink1Name,
    docLink2,
    docLink2Name,
  } = project;

  const onDelete = () => {
    deleteProject(id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(project);
  };

  return (
    <div className='col s12 m12 l12 item'>
      <ResumeBlock
        heading={heading}
        subheading={subheading}
        body={body}
        list={true}
        links={true}
        gitLink={gitLink}
        demoLink={demoLink}
        docLink1={docLink1}
        docLink2={docLink2}
        docLink1Name={docLink1Name}
        docLink2Name={docLink2Name}
        techStack={techStack}
        editButton={false}
        deleteButton={false}
        onDelete={onDelete}
        onEdit={onEdit}
        dark={dark}
      ></ResumeBlock>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
