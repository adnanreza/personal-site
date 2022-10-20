import React, { Fragment, useContext } from 'react';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion'

import ProjectFilter from './ProjectFilter';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

export const Projects = ({dark}) => {
  //Initialize context
  const projectContext = useContext(ProjectContext);

  const { projects, filtered } = projectContext;

  if (projects.length === 0) {
    return <h4>No Projects added yet</h4>;
  }

  return (
    <Fragment>
      <motion.div className='container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        <div className='row'>
          <h4 style={headingStyle}>
            <i className='fas fa-project-diagram'></i>
            {` `}
            Projects
          </h4>
          <ProjectFilter></ProjectFilter>
          <br></br>
          {/**Featured Projects */}

          <div className='row'>
            <TransitionGroup>
              {filtered !== null
                ? filtered.map((project) => (
                    <CSSTransition
                      key={project._id}
                      timeout={500}
                      classNames='item'
                    >
                      <ProjectItem key={project.id} project={project} dark={dark}/>
                    </CSSTransition>
                  ))
                : projects.map((project) => (
                    <CSSTransition
                      key={project._id}
                      timeout={500}
                      classNames='item'
                    >
                      <ProjectItem key={project.id} project={project} dark={dark}/>
                    </CSSTransition>
                  ))}
            </TransitionGroup>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

const headingStyle = {
  padding: '0.5rem 1rem 1rem 0',
};

export default Projects;
