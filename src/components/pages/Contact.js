import React, { Component, Fragment } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: '', lname: '', email: '', message: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    alert(
      'Hi' +
        ' ' +
        this.state.fname +
        ' ' +
        this.state.lname +
        '. Thank you for you message. Your email is ' +
        this.state.email +
        ' and your message is ' +
        this.state.message
    );
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            <form className='col s12' onSubmit={this.onSubmit}>
              <h3>Leave a message.</h3>
              <br />
              <br />
              <div className='input-field col s6'>
                <input
                  placeholder='First Name'
                  name='fname'
                  type='text'
                  className='validate'
                  value={this.fname}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className='input-field col s6'>
                <input
                  placeholder='Last Name'
                  name='lname'
                  type='text'
                  className='validate'
                  value={this.lname}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='input-field col s8'>
                <input
                  placeholder='Email'
                  name='email'
                  type='email'
                  className='validate'
                  value={this.email}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='input-field col s12'>
                <textarea
                  name='message'
                  maxLength='250'
                  className='materialize-textarea'
                  value={this.message}
                  placeholder='Message'
                  onChange={e => this.onChange(e)}
                ></textarea>
              </div>

              <div className='input-field col s6'>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  value='Submit'
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
  }
}
