import React from 'react';
import Animation from '../tools/cardAnimation';
import '../../css/projects.css'
import githubLogo from '../../img/githubLogo.png';
import viewLive from '../../img/viewPageIco.png';
import projectList from '../../json/projectList.json';

var cardTemplate = projectList.map((data, i) => {
  return <Animation options={{}}>
  <div class="proCard">
    <div class="projectTitle">
        <p>{ data.name }</p>
    </div>
    <div class="projDesc">
            { data.description }
        </div>
    <div class="cardBody">
        <a href={data.deployed} className="deployedLink">
          <div class="viewBtn">
                  <p className="viewLiveTxt">View Live</p><img src={viewLive} alt="live_page" className="viewImg"></img>
          </div>
        </a>
        <a href={data.github} className="githubLink">
          <div class="gitBtn">
                 <img src={githubLogo} alt="GitHub"></img> <p className="gitHubTxt">Repository</p>
          </div>
        </a>
    </div>
  </div>
  </Animation>
});

export default function Projects() {
  return (
    
    <div id="projectcard" className="projectContainer">
      <div className="projectHeader">
        <div className="projectH1">Software Development: <div>Project Hub</div></div>
        <div className="projectH2">Here is a list of some of the projects I have worked on and made available on my Github page. Most of these were developed during my certification course at the University of North Carolina at Chapel Hill.</div>
        <div className="projectH3">While all of the project cards have a "view live" button, not all of them are functional depending on the type of application.</div>
      </div>

      { cardTemplate }

    </div>
  );
}
