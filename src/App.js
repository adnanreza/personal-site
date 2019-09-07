import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Router>
      <div className='App'>
        <Navbar></Navbar>
        Adnan's website
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
