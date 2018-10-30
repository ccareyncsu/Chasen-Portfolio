import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import Overlay from './Overlay';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: false
    };
  }

  handleOverlay= () => {
    console.log('overlay handled');
    this.setState({
      display: !this.state.display
    })
  }
  
  render() {
    console.log(this.state);
    let overlay;
    if(this.state.display === true){
      overlay = <Overlay onClick={()=> this.handleOverlay}/> 
    }else{overlay = ''};

    return (
      <div className="App">
        {overlay}
        <NavBar onClick={()=> this.handleOverlay}/>
        <Header />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        {/* <EducationSection /> */}
        <ContactSection />
      </div>
    );
  }
}

export default LandingPage;
