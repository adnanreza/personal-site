import { SEARCH_PROJECTS, SET_LOADING, PROJECTS_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case PROJECTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
