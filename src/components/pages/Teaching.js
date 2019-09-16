import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CC from '../layout/columbia-college.png';
import BU from '../layout/bracu.png';
import UBCCS from '../layout/ubccs.png';

const Teaching = () => {
  return (
    <Fragment>
      <div className='container'>
        <div class='section'>
          <h5>Computer Science Instructor</h5>
          <h7>
            Department of Computer Science and Mathematics
            <br />
            Columbia College
            <br />
            Vancouver, BC
          </h7>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nesciunt hic deserunt eum eveniet aspernatur numquam beatae fuga aut
            nam?
          </p>
        </div>
        <div class='divider'></div>
        <div class='section'>
          <h5>Graduate Teaching Assistant</h5>
          <h7>
            Department of Computer Science
            <br />
            University of British Columbia
            <br />
            Vancouver, BC
          </h7>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nesciunt hic deserunt eum eveniet aspernatur numquam beatae fuga aut
            nam?
          </p>
        </div>
        <div class='divider'></div>
        <div class='section'>
          <h5>Teaching Assistant</h5>
          <h7>
            Department of Computer Science and Engineering
            <br />
            BRAC University
            <br />
            Dhaka, Bangladesh
          </h7>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nesciunt hic deserunt eum eveniet aspernatur numquam beatae fuga aut
            nam?
          </p>
        </div>
        <div class='divider'></div>
        <div class='section'>
          <h5>Teaching Assistant</h5>
          <h7>
            Department of Economics
            <br />
            BRAC University
            <br />
            Dhaka, Bangladesh
          </h7>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nesciunt hic deserunt eum eveniet aspernatur numquam beatae fuga aut
            nam?
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Teaching;
