import {
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
  FILTER_PROJECTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const ProjectReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? action.payload : project
        )
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_PROJECTS:
      return {
        ...state,
        filtered: state.projects.filter(project => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            project.heading.match(regex) || project.subheading.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
export default ProjectReducer;
