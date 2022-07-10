import React, { useState } from 'react';
import NavTabs from './NavBar.js';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Mobile from './pages/Mobile.js';
import {isMobile} from 'react-device-detect'

import portHeader from '../img/portfolioHeaderSmall.png';
import '../css/app.css';
import '../css/projects.css';

export default function PortfolioContainer() {
  
  if (isMobile){
    
  }
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume url="https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf" />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  if (isMobile){
    return <Mobile />;
  }
  return (
    <div className="desktopBG">
      <header className="header">
          <img src={portHeader} alt="dubosews header" />
      </header>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
