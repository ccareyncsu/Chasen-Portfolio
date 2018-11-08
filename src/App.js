import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './normalize.css';
import './simple-grid.css';
import './flow-text.css';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={LandingPage} />
        </div>
      </Router>
      // <div className="App">
      //   <NavBar />
      //   <Header />
      //   <AboutSection />
      //   <ProjectSection />
      //   <SkillsSection />
      //   {/* <EducationSection /> */}
      //   <ContactSection />
      // </div>
    );
  }
}

export default App;
