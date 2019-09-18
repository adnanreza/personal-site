import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const Contact = props => {
  const contactContext = useContext(ContactContext);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: ''
  });

  const { fname, lname, email, message } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <form className='col s12' onSubmit={e => onSubmit(e)}>
            <h3>Leave a message.</h3>
            <br />
            <br />
            <div className='input-field col s6'>
              <input
                placeholder='First Name'
                id='first_name'
                type='text'
                className='validate'
                value={fname}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='first_name'>First Name</label>
            </div>
            <div className='input-field col s6'>
              <input
                placeholder='Last Name'
                id='last_name'
                type='text'
                className='validate'
                value={lname}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='last_name'>Last Name</label>
            </div>

            <div className='input-field col s8'>
              <input
                placeholder='Email'
                id='email'
                type='email'
                className='validate'
                value={email}
                onChange={e => onChange(e)}
                required
              />
              <label htmlFor='email'>Email</label>
            </div>

            <div className='input-field col s12'>
              <textarea
                id='textarea1'
                maxLength='250'
                className='materialize-textarea'
                value={message}
                onChange={e => onChange(e)}
              ></textarea>
              <label htmlFor='textarea1'>Message</label>
            </div>

            <div className='input-field col s6'>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                name='action'
              >
                Submit
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Contact.propTypes = {};

export default Contact;
