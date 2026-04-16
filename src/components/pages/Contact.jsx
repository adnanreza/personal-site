import React, { Component, Fragment } from 'react';
import { motion } from 'framer-motion'

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

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { subject: '', message: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <Fragment>
        <motion.div className='container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
          <div className='row'>
            <form className='col s12' onSubmit={this.onSubmit}>
              <h3>Send Adnan an email.</h3>
              <br />
              <br />

              <div className='input-field col s6'>
                <input
                  placeholder='Subject'
                  name='subject'
                  type='text'
                  className='validate'
                  value={this.state.subject}
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className='input-field col s12'>
                <textarea
                  name='message'
                  maxLength='250'
                  className='materialize-textarea'
                  value={this.state.message}
                  placeholder='Message'
                  onChange={e => this.onChange(e)}
                  required
                ></textarea>
              </div>

              <div className='input-field col s6'>
                <a
                  className='btn waves-effect waves-light'
                  type='submit'
                  value='Submit'
                  href={`mailto:adnan.reza@outlook.com?subject=${this.state.subject}&body=${this.state.message}`}
                >
                  Send Email
                  <i className='material-icons right'>send</i>
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </Fragment>
    );
  }
}
