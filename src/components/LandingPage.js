import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <AboutSection id='about'/>
        <ProjectSection id='project'/>
        <SkillsSection id='skills'/>
        {/* <EducationSection /> */}
        <ContactSection id='contact'/>
      </div>
    );
  }
}

export default LandingPage;
