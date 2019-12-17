import {
  ADD_PROJECT,
  FILTER_PROJECTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  PROJECT_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    default:
      return state;
  }
};
