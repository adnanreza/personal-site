import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import uuid from 'uuid';
import {
  ADD_PROJECT,
  FILTER_PROJECTS,
  CLEAR_FILTER,
  SET_LOADING,
  PROJECT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const ProjectState = props => {
  const initialState = {
    projects: [
      {
        id: 1,
        heading: 'devBook - Professional Social Network',
        subheading: 'React, Redux, Node.js, MongoDB',
        body: [
          'Designed, developed and deployed a social network for developers using the MERN stack',
          'Developed front-end using React and managed application state using Redux',
          'Designed UI using Bootstrap 4, CSS3 and HTML5',
          'Developed REST API using Node.js/Express.js and MongoDB/Mongoose',
          'Deployed web application to Heroku'
        ],
        gitLink: 'https://github.com/adnanreza/devBook',
        demoLink: 'https://devbook.adnanreza.com/',
        techStack: 'fab fa-react'
      },
      {
        id: 2,
        heading: 'Contacts Organizer',
        subheading: 'React, Redux, Node.js, MongoDB',
        body: [
          'Designed, developed and deployed a contacts organizer web app using the MERN stack',
          "Developed front-end using React and managed application state using React's ContextAPI",
          'Designed UI using Bootstrap 4, CSS3 and HTML5',
          'Developed REST API using Node.js/Express.js and MongoDB/Mongoose',
          'Deployed web application to Heroku'
        ],
        gitLink: 'https://github.com/adnanreza/contactsOrganizer',
        demoLink: 'http://corganizer.adnanreza.com/',
        techStack: 'fab fa-react'
      },
      {
        id: 3,
        heading: 'GitHub Profile Locator',
        subheading: 'JavaScript ES6, HTML5, CSS3, Bootstrap',
        body: [
          'Designed Single Page App using JavaScript ES6 to dynamically display Github User details based on search terms',
          'Consumed Github API to display user repositories and public details',
          'Implemented user interface using Bootstrap 4'
        ],
        gitLink: 'https://github.com/adnanreza/GitHubProfileLocator',
        demoLink: 'https://adnanreza.github.io/GitHubProfileLocator/',
        techStack: 'fab fa-js'
      },
      {
        id: 4,
        heading: 'Calorie Tracker App',
        subheading: 'JavaScript ES6, HTML5, CSS3, Materialize CSS',
        body: [
          'Designed Single Page App using JavaScript ES6 to track calories consumed',
          'Used the module pattern to design the app',
          'Implemented user interface using HTML5, Materialize CSS and CSS3'
        ],
        gitLink: 'https://github.com/adnanreza/calTracker',
        demoLink: 'https://adnanreza.github.io/calTracker/',
        techStack: 'fab fa-js'
      },
      {
        id: 5,
        heading: 'chickenRun - Search Engine',
        subheading: 'Php, MySQL, JavaScript, jQuery, HTML5, CSS3',
        body: [
          'Designed and developed a web crawler using the LAMP stack',
          'Developed front-end using HTML5, CSS3, jQuery, JavaScript ES6',
          'Developed back-end using PHP and MySQL'
        ],
        gitLink: 'https://github.com/adnanreza/ChickenRun',
        techStack: 'fab fa-php'
      }
    ]
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Add Project
  const addProject = project => {
    project.id = uuid.v4();
    dispatch({ type: ADD_PROJECT, payload: project });
  };

  // Filter Projects

  // Clear filter

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        addProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
