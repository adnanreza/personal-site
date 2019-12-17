import React, { useState, useContext } from 'react';
import ProjectContext from '../../context/project/projectContext';

const ProjectForm = () => {
  const projectContext = useContext(ProjectContext);

  const [project, setProject] = useState({
    heading: '',
    subheading: '',
    body: '',
    gitLink: '',
    demoLink: '',
    techStack: 'fab fa-js'
  });

  const { heading, subheading, body, gitLink, demoLink, techStack } = project;

  const onChange = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    projectContext.addProject(project);
    setProject({
      heading: '',
      subheading: '',
      body: '',
      gitLink: '',
      demoLink: '',
      techStack: 'fab fa-js'
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Project</h2>
      <input
        type='text'
        name='heading'
        placeholder='heading'
        value={heading}
        onChange={onChange}
      />
      <input
        type='text'
        name='subheading'
        placeholder='subheading'
        value={subheading}
        onChange={onChange}
      />
      <input
        type='text'
        name='body'
        placeholder='body'
        value={body}
        onChange={onChange}
      />
      <input
        type='text'
        name='gitLink'
        placeholder='gitLink'
        value={gitLink}
        onChange={onChange}
      />
      <input
        type='text'
        name='demoLink'
        placeholder='demoLink'
        value={demoLink}
        onChange={onChange}
      />
      <div className='radio'>
        <p>
          <label>
            <input
              name='techStack'
              type='radio'
              value='fab fa-js'
              checked={techStack === 'fab fa-js'}
              onChange={onChange}
            />
            <span>JS</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name='techStack'
              type='radio'
              value='fab fa-react'
              checked={techStack === 'fab fa-react'}
              onChange={onChange}
            />
            <span>React</span>
          </label>
        </p>
      </div>

      <div>
        <input
          class='waves-effect waves-light btn'
          type='submit'
          value='Add Project'
        />
      </div>
    </form>
  );
};

export default ProjectForm;
