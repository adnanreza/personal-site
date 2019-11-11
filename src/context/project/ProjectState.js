import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import { SEARCH_PROJECTS, SET_LOADING, PROJECTS_ERROR } from '../types';

const ProjectState = props => {
  const initialState = {
    projects: [],
    loading: false
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  //Search Projects
  const searchProjects = text => async dispatch => {
    try {
      setLoading();

      const res = await fetch(`/q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_PROJECTS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: PROJECTS_ERROR,
        payload: error.response.statusText
      });
    }
  };

  //Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        loading: state.loading,
        searchProjects
      }}
    ></ProjectContext.Provider>
  );
};

export default ProjectState;
