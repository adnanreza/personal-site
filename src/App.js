import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Teaching from './components/pages/Teaching';
import Projects from './components/projects/Projects';
import Experience from './components/pages/Experience';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import NotFound from './components/layout/NotFound';
import ScrollToTop from './components/layout/ScrollToTop';

import ProjectState from './context/project/ProjectState';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  const themeLS = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  const [dark, setDark] = useState(themeLS);
  console.log("dark state: "+dark);

  useEffect(()=>{
    localStorage.setItem('theme', dark);
  }, [dark])

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.75 }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }

  return (
    <ProjectState>
        <ScrollToTop></ScrollToTop>
        <motion.div id='main' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
          <Navbar title='AR' dark={dark} setDark={setDark}></Navbar>
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/Teaching' component={Teaching}></Route>
              <Route exact path='/Experience' component={Experience}></Route>
              <Route exact path='/Projects' component={Projects}></Route>
              <Route exact path='/Resume' component={Resume}></Route>
              <Route exact path='/Contact' component={Contact}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </AnimatePresence>
        </motion.div>
        <Footer/>
    </ProjectState>
  );
};

export default App;
