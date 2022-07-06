import React from 'react';
import homeIco from '../img/homeIco_cyan.png';
import aboutIco from '../img/aboutIco_cyan.png';
import projectIco from '../img/projectIco_cyan.png';
import resumeIco from '../img/resumeIco_cyan.png';
import contactIco from '../img/contactIco_cyan.png';
import '../css/app.css';
import '../css/nav.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="container blue borderYtoX">
      <a
        href="#home"
        onClick={() => handlePageChange('Home')}
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        // className={currentPage === 'Home' ? 'activeLinkXtoY' : ''}
      >
        <img src={homeIco} alt="homeIco" className="homeIcon" />   Home
      </a>
    
      <a
        href="#about"
        onClick={() => handlePageChange('About')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        //className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >
        <img src={aboutIco} alt="homeIco" className="aboutIcon" />   About Me
      </a>
    
      <a
        href="#projects"
        onClick={() => handlePageChange('Projects')}
        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        //className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
      >
        <img src={projectIco} alt="projectIco" className="projectsIcon" />   Projects
      </a>
    
      <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        //className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      >
        <img src={resumeIco} alt="resumeIco" className="resumeIcon" />   <p className="resumeTxt">Resume</p>
      </a>
    
      <a
        href="#contact"
        onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        //className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >
        <img src={contactIco} alt="contactIco" className="contactIcon" />   Contact Me
      </a>
    </div>
  );
}

export default NavTabs;
