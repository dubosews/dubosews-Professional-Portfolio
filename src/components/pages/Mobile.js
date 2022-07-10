import React from 'react';
import ResumeFile from '../../docs/dubosewsResume.pdf';
import certUNC from '../../docs/dubosewsUNCCertificate.pdf';
import warningIcon from '../../img/mobileIcons/mobileWarningFill.png';
import menuIcon from '../../img/mobileIcons/mobileMenu.png';
import menuClose from '../../img/mobileIcons/mobileClose.png';
import Contact from '../pages/Contact';
import '../../css/mobile.css';
import { func } from 'prop-types';

// import ViewSDKClient from '../tools/viewSDK';

// function componentDidMount() {
//     const viewSDKClient = new ViewSDKClient();
//     viewSDKClient.ready().then(() => {
//         /* Invoke file preview */
//         viewSDKClient.previewResume("pdf-div", {
//             // /* Pass the embed mode option here */
//             // embedMode: "SIZED_CONTAINER"
//         });
//     });
// }


export default function Mobile() {
    
    // componentDidMount();

    return (
        <div className="mobileContainer">
            <div className="mobileMenu">
                <div id="menuDefault" className="menuDefault">
                    <img src={menuIcon} id="menuIcon" className="menuIcon" alt="menu" onClick={showMenu}></img>
                </div>
                <div id="mobileNav" className="mobileNav">
                    <img src={menuClose} id="menuClose" className="menuClose" alt="menuClose" onClick={hideMenu}></img><br />
                    <a href={ResumeFile}>
                        <div className="menuResume">
                            View Resume
                        </div>
                    </a><br />
                    <a href={certUNC}>
                        <div>
                            <div className="menuCert">
                                Certificates
                            </div>
                        </div>
                    </a><br />
                        <div>
                            <div className="menuCert" onClick={showContact}>
                                Contact Me
                            </div>
                        </div><br />
                </div>
            </div>
            <div className="homeContentCard">
                <div className="homeWelc centerLR"> Thank You for Visiting: </div>
                <div className="homeTitle centerLR">Wesley DuBose's Dev Portfolio (Mobile Version)</div>
            </div>
            <div id="mobileWarning" className="homeContentCard mobileWarning">
                <div className="homeWelc centerLR">
                    <img src={warningIcon} className="warningIcon" alt="warningIcon" />
                </div>
                <div className="mobileWarningTxt">WARNING. You are viewing this page because I have detected you are using a mobile browser. To view the dynamic version of this application please reopen this page in a desktop browser. Most functionality has been disabled for this version of my application but access to my resume, certificates and contact information is still available in the menu above.</div>
            </div>
            <div id="mobileContact" className="mobileContact">
                <Contact />
            </div>
            
        </div>
        
    );
}

function showMenu () {
    document.getElementById('mobileNav').style.display='flex';
    document.getElementById('menuClose').style.display='flex';
    document.getElementById('menuDefault').style.display='none';
}

function hideMenu () {
    document.getElementById('mobileNav').style.display='none';
    document.getElementById('menuDefault').style.display='flex';
    document.getElementById('menuClose').style.display='none';
    document.getElementById('mobileMenu').style.backgroundColor='#ffffff';
}

function showContact () {
    document.getElementById('mobileWarning').style.display='none';
    document.getElementById('contactHeader').style.display='none';
    document.getElementById('mobileContact').style.display='flex';
    document.getElementById('contactContainer').style.width='80%';
    hideMenu();
}