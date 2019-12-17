import React, { useState, useContext, useEffect } from 'react';
import ProjectContext from '../../context/project/projectContext';

const ProjectForm = () => {
  const projectContext = useContext(ProjectContext);

  const { addProject, updateProject, clearCurrent, current } = projectContext;

  useEffect(() => {
    if (current !== null) {
      setProject(current);
    } else {
      setProject({
        heading: '',
        subheading: '',
        body: '',
        gitLink: '',
        demoLink: '',
        techStack: 'fab fa-js'
      });
    }
  }, [projectContext, current]);

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
    if (current === null) {
      addProject(project);
    } else {
      updateProject(project);
    }

    setProject({
      heading: '',
      subheading: '',
      body: '',
      gitLink: '',
      demoLink: '',
      techStack: 'fab fa-js'
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? 'Edit Project' : 'Add Project'}</h2>
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
          value={current ? 'Update Project' : 'Add Project'}
        />
      </div>
      {current && (
        <div>
          <button className='waves-effect waves-light btn' onClick={clearAll}>
            Clear All
          </button>
        </div>
      )}
    </form>
  );
};

export default ProjectForm;
