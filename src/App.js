import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Teaching from './components/pages/Teaching';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Research from './components/pages/Research';
import NotFound from './components/layout/NotFound';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      <Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Teaching' component={Teaching}></Route>
          <Route exact path='/Experience' component={Experience}></Route>
          <Route exact path='/Projects' component={Projects}></Route>
          <Route exact path='/Resume' component={Resume}></Route>
          <Route exact path='/Contact' component={Contact}></Route>
          <Route exact path='/Research' component={Research}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </Fragment>
    </Router>
  );
};

export default App;
