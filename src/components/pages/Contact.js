import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Contact = props => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  return (
    <Fragment>
      <div className='row'>
        <form className='col s12'>
          <h3>Leave a message</h3>
          <div class='input-field col s6'>
            <input
              placeholder='Placeholder'
              id='first_name'
              type='text'
              class='validate'
            />
            <label for='first_name'>First Name</label>
          </div>
          <div class='input-field col s6'>
            <input id='last_name' type='text' class='validate' />
            <label for='last_name'>Last Name</label>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

Contact.propTypes = {};

export default Contact;
