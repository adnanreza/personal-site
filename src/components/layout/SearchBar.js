import React, { useState, useContext } from 'react';
import ProjectContext from '../../context/project/projectContext';

const SearchBar = () => {
  const projectContext = useContext(ProjectContext);
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      console.log('Please enter something!');
    } else {
      projectContext.searhProjects(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div className='nav-wrapper'>
      <form onSubmit={onSubmit}>
        <div className='input-field'>
          <input
            id='search'
            type='search'
            value={text}
            onChange={onChange}
            placeholder='Search Keywords...'
          />
          <label class='label-icon' for='search'>
            <i class='material-icons'>search</i>
          </label>
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
