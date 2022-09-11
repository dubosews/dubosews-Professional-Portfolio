import React, { Component } from 'react';
import aboutBioDefault from '../../img/aboutIcons/aboutBioOutBlue.png';
import aboutBioActive from '../../img/aboutIcons/aboutBioFillWhite.png';
import aboutTechDefault from '../../img/aboutIcons/aboutTechTerminalOutBlue.png';
import aboutTechActive from '../../img/aboutIcons/aboutTechTerminalFillWhite.png';
import aboutCertDefault from '../../img/aboutIcons/aboutCertOutBlue.png';
import aboutCertActive from '../../img/aboutIcons/aboutCertFillWhite.png';
import ProfileImg from '../../img/aboutImg/wesleyIMG.png';
import ViewSDKClient from '../tools/viewSDK';
import Rating from '@mui/material/Rating';
import '../../css/about.css';

import techAppleDefault from '../../img/techIcons/appleWhite.png';
import techAppleHover from '../../img/techIcons/appleBlack.png';
import techWindows from '../../img/techIcons/windows.png';
import techUbuntu from '../../img/techIcons/ubuntu.png';
import techCreate from '../../img/techIcons/adobe_creativeCloud.png';
import techDream from '../../img/techIcons/adobe_dreamweaver.png';
import techIllustrate from '../../img/techIcons/adobe_illustrator.png';
import techIndes from '../../img/techIcons/adobe_indesign.png';
import techPhotos from '../../img/techIcons/adobe_photoshop.png';
import techPrem from '../../img/techIcons/adobe_premier.png';
import techXD from '../../img/techIcons/adobe_xd.png';
import techGis from '../../img/techIcons/ArcGIS.png';
import techAutoDesk from '../../img/techIcons/autodesk.png';
import techAutoCad from '../../img/techIcons/autoCad.png';
import techRevit from '../../img/techIcons/revit.png';
import techAudacity from '../../img/techIcons/audacity.png';
import techCss from '../../img/techIcons/css.png';
import techDiscord from '../../img/techIcons/discord.png';
import techDropBox from '../../img/techIcons/dropBox.png';
import techFirefox from '../../img/techIcons/firefox.png';
import techGarageBand from '../../img/techIcons/garageBand.png';
import techGithub from '../../img/techIcons/GitHub.png';
import techGoogle from '../../img/techIcons/google.png';
import techDrive from '../../img/techIcons/googleDrive.png';
import techChrome from '../../img/techIcons/googleChrome.png';
import techHtml from '../../img/techIcons/html.png';
import techInsomnia from '../../img/techIcons/insomnia.png';
import techJava from '../../img/techIcons/javascript.png';
import techOneDrive from '../../img/techIcons/microsoft_oneDrive.png';
import techExcel from '../../img/techIcons/microsoft_excel.png';
import techOutlook from '../../img/techIcons/microsoft_outlook.png';
import techPowerP from '../../img/techIcons/microsoft_powerpoint.png';
import techPublish from '../../img/techIcons/microsoft_publisher.png';
import techWord from '../../img/techIcons/microsoft_word.png';
import techMongo from '../../img/techIcons/mongoDB.png';
import techNode from '../../img/techIcons/NodeJS.png';
import techReact from '../../img/techIcons/ReactJS.png';
import techSlack from '../../img/techIcons/slack.png';
import techSteam from '../../img/techIcons/steam.png';
import techVisual from '../../img/techIcons/visualStudio.png';
import techZoom from '../../img/techIcons/zoom.png';
import techSafari from '../../img/techIcons/safari.png';
import techEdge from '../../img/techIcons/edge.png';
import techEA from '../../img/techIcons/ea.png';
import techBattle from '../../img/techIcons/battlenet.png';


class AboutContainer extends Component {
  componentDidMount() {
      const viewSDKClient = new ViewSDKClient();
      viewSDKClient.ready().then(() => {
          /* Invoke file preview */
          viewSDKClient.previewCertificate("uncCert", {
              /* Pass the embed mode option here */
              embedMode: "SIZED_CONTAINER"
          });
      });
      viewSDKClient.ready().then(() => {
        /* Invoke file preview */
        viewSDKClient.previewOutward("outwardCert", {
            /* Pass the embed mode option here */
            embedMode: "SIZED_CONTAINER"
        });
    });
  }

  render() {
      return (
        <div className="aboutContainer">
          <div className="tabTitles">
            <div className="tabContainer tabBio" id="bioBtn" onMouseEnter={showBio} onClick={showBio}>
              <div className="tabIcons bioTabIcons">
                <img src={ aboutBioDefault } alt="aboutBioDefault" className="aboutBioDefault" />
                <img src={ aboutBioActive } alt="aboutBioActive" className="aboutBioActive" />
              </div>
              <div className="bioTabText">
                Biography
              </div>
            </div>
            <div className="tabContainer tabTech" id="techBtn" onMouseEnter={showTech} onClick={showTech}>
              <div className="tabIcons techTabIcons">
                <img src={ aboutTechDefault } alt="aboutTechDefault" className="aboutTechDefault" />
                <img src={ aboutTechActive } alt="aboutTechActive" className="aboutTechActive" />
              </div>
              <div className="techTabText">
                Technologies
              </div>
            </div>
            <div className="tabContainer tabCert" id="certBtn" onMouseEnter={showCert} onClick={showCert}>
              <div className="tabIcons certTabIcons">
                <img src={ aboutCertDefault } alt="aboutCertDefault" className="aboutCertDefault" />
                <img src={ aboutCertActive } alt="aboutCertActive" className="aboutCertActive" />
              </div>
              <div className="certTabText">
                Certifications
              </div>
            </div>
          </div>
          <div className="aboutContent">
            <div className="aboutBody" id="aboutBody">
              Please choose a page from the options on the left.
            </div>
            <div className="bioBody" id="bioBody">
              <div className="bioTop">
                <img src={ProfileImg} classname="profileImg" alt="profilePic" />
                <div className="bioIntro">
                  <div className="bioTitle">Biography:</div>
                  <div className="bioTxt">
                    <p>	Hello, my name is Wesley DuBose (I’m the one in the grey hoodie). I am a 22 year old Certified Full Stack Application Developer from North Carolina and this is my Professional Development Portfolio. Also in this picture with me is my goofy four-legged best friend Dolly DuBose. She is a labrador-rottweiler mix and a Certified Good Girl. </p>
                  </div>
                </div>
              </div>
              <div className="bioContent">
                <p>I have been interested in technology and computers my whole life. I grew up with Google to help me do my homework and my search bar skills have significantly improved since then. In high school I was the head of lighting for my school’s theater department until junior year when I became the head of the entire tech crew, a position that I held for 2 years until I graduated. It was because of this experience I was offered a part time job hanging lights and laying cable for a professional production company. This company organizes events like gala fundraisers for universities, and other types of large scale professional events, working in that kind of environment along with what I was learning in the tech department helped solidify a lot of key technology hardware fundamentals for me, especially involving sound and lighting.</p>
                <p>After graduating, I attended Appalachian State University for three and a half years where I pursued a degree in sustainable technology. Some of the classes I took include: Architecture Graphics and Computer modeling, building sciences, Digital Media Composition, Graphic design and computer aided design courses and intro to computer science and electronics courses. In my senior year, mid quarantine, a family emergency brought me back home temporarily.</p>
                <p>I had the intention to return to Appalachian State to finish my education once I was no longer needed at home, but I came across a program offered by the University of North Carolina at Chapel Hill. This program was a Certification course to become a Full Stack Software Developer. I didn’t know much about writing code when I first started, but I had just recently built my own gaming rig and went through all the learning to overclock it and get everything setup and working the best. So, I was already getting into some of the more complicated computer concepts and I was really enjoying it so I saw learning to code as a very good way to be able to work with computers for a living. It is almost as fun to me as putting together a new computer with really good parts, but what is?</p>
                <p>I am aware that the course did not teach me everything that I need to know, but I feel that I got a very good understanding of how to find what I do not yet know. I am a very fast learner and I can adapt quickly to different environments and circumstances, including long coding sessions. When I am not working, I am either playing video games, specifically Rocket League (I’m a D3-C1)  and Apex legends, listening to/ playing music, or surfing/ snowboarding, depending on the season. Going to school up at App State gave me an affinity for the outdoors and being in the mountains, so I hope to be able to continue to get back up there to go camping and snowboarding.</p>
                <p>Thank you for reading this far, I look forward to hopefully meeting you in the interview.</p>
              </div>
            </div>
            <div className="techBody" id="techBody">
              <div className="aboutHeader">
                <div className="aboutH1">Familiar Tech: <div>Software & Hardware</div></div>
                <div className="aboutH2">Here is a list of some of the technologies/ applications that I have been exposed to and have some amount of familiarity with.</div>
                <div className="aboutH3">If you hover over the application icon, a rating of how familiar I am with the selected tool on a scale from 1 to 5 stars.</div>
              </div>
              <div className="techIcons">
              <div className="icoIndvContainer appleIco">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Mac OS</div>
                      <Rating 
                        name = "half-rating-read"
                        precision = {0.5}
                        className ="techRating" 
                        value = "5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techAppleDefault} className="techIco icoAppleDefault" alt="iconUnavailable"></img>
                  <img src={techAppleHover} className="techIco icoAppleHover" alt="iconUnavailable"></img>
                </div>
              <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Windows</div>
                      <Rating 
                        name = "half-rating-read"
                        precision = {0.5}
                        className ="techRating" 
                        value = "5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techWindows} className="techIco" alt="iconUnavailable"></img>
                </div>
              <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Ubuntu Linux</div>
                      <Rating 
                        name = "half-rating-read"
                        precision = {0.5}
                        className ="techRating" 
                        value = "3.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techUbuntu} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Adobe CC</div>
                      <Rating 
                        name = "half-rating-read"
                        precision = {0.5}
                        className ="techRating" 
                        value = "4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techCreate} className="techIco icoAdobe" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Dreamweaver</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="2" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techDream} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Illustrator</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techIllustrate} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">InDesign</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision = {0.5}
                        value="3.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techIndes} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Photoshop</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techPhotos} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Premier Pro</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating"
                        precision={0.5}
                        value="2.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techPrem} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Adobe XD</div>
                      <Rating 
                        name="half-rating-read" 
                        precision={0.5}
                        className="techRating" 
                        value="3.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techXD} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">GarageBand</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating"
                        precision={0.5}
                        value="2.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techGarageBand} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Audacity</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="3" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techAudacity} className="techIco icoAudacity" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Autodesk</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techAutoDesk} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">AutoCAD</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating"
                        precision={0.5}
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techAutoCad} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Revit 3D</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="2.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techRevit} className="techIco icoRevit" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Visual Studio</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="3.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techVisual} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">MongoDB</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="2" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techMongo} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Insomnia</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techInsomnia} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">HTML</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techHtml} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">CSS</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techCss} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Javascript</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="2.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techJava} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Node.JS</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="3" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techNode} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">React.JS</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="2.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techReact} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">GitHub</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="3" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techGithub} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Google</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techGoogle} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Google Drive</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techDrive} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Chrome</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techChrome} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Safari</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techSafari} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Firefox</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techFirefox} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Edge</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techEdge} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Discord</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techDiscord} className="techIco icoDiscord" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Slack</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="3" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techSlack} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Zoom</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techZoom} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer icoOneDr">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">OneDrive</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techOneDrive} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Word</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techWord} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Excel</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating"
                        precision={0.5} 
                        value="4.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techExcel} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">PowerPoint</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techPowerP} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Publisher</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="3.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techPublish} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Outlook</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="2.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techOutlook} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Steam</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techSteam} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">EA</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techEA} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">Battle.net</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        value="4" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techBattle} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">DropBox</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="2.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techDropBox} className="techIco" alt="iconUnavailable"></img>
                </div>
                <div className="icoIndvContainer">
                  <div className="hideRating">
                    <div className="techRatingContainer">
                      <div className="techIcoTitle">ArcGIS</div>
                      <Rating 
                        name="half-rating-read" 
                        className="techRating" 
                        precision={0.5}
                        value="0.5" 
                        sx={{
                          color: 'white',
                        }}
                        readOnly />
                    </div>
                  </div>
                  <img src={techGis} className="techIco" alt="iconUnavailable"></img>
                </div>
              </div>
            </div>
            <div className="certBody" id="certBody">
              <div className="certTitle"> 
                <div className="certHead">
                  <div className="certT1">Full Stack Application Development</div>
                  <div className="certT2">The University of North Carolina at Chapel Hill</div>
                </div>
                <div className="certTNum">
                  <div className="certTNumTxt">1 / 2</div>
                </div>                      
              </div>
              <div className="uncCertBox">
                <div id="uncCert" className="certBox" />
              </div>
              <div className="certTitle"> 
                <div className="certHead">
                  <div className="certT1">Fitness, Craftsmanship, Self-Reliance and Compassion</div>
                  <div className="certT2">The North Carolina Outward Bound School</div>
                </div>
                <div className="certTNum">
                  <div className="certTNumTxt">2 / 2</div>
                </div>                      
              </div>
              <div className="outwardCertBox">
              <div id="outwardCert" className="certBox" />
              </div>        
            </div>
          </div>
      </div>
      );
  }
}

export default AboutContainer;


function showBio () {
  document.getElementById("bioBody").style.display="flex";
  document.getElementById("aboutBody").style.display="none";
  document.getElementById("techBody").style.display="none";
  document.getElementById("certBody").style.display="none";
};

function showTech () {
  document.getElementById("bioBody").style.display="none";
  document.getElementById("aboutBody").style.display="none";
  document.getElementById("techBody").style.display="flex";
  document.getElementById("certBody").style.display="none";
};

function showCert () {
  document.getElementById("bioBody").style.display="none";
  document.getElementById("aboutBody").style.display="none";
  document.getElementById("techBody").style.display="none";
  document.getElementById("certBody").style.display="flex";
};