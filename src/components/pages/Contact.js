import React from 'react';
import '../../css/contact.css';
import Animation from '../tools/cardAnimation';

import contactPhone from '../../img/contactIcons/contactPhone.png';
import contactPhoneHover from '../../img/contactIcons/contactPhoneHover.png';
import contactGmail from '../../img/contactIcons/contactGmail.png';
import contactGmailHover from '../../img/contactIcons/contactGmailHover.png';
import contactLinkedin from '../../img/contactIcons/contactLinkedin.png';
import contactLinkedinHover from '../../img/contactIcons/contactLinkedinHover.png';
import contactGithub from '../../img/contactIcons/contactGithub.png';
import contactGithubHover from '../../img/contactIcons/contactGithubHover.png';
import contactFacebook from '../../img/contactIcons/contactFacebook.png';
import contactFacebookHover from '../../img/contactIcons/contactFacebookHover.png';
import contactTwitch from '../../img/contactIcons/contactTwitch.png';


export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactHeader">How to Contact Me:</div>
      <div className="contactBtns">
        <div className="contactLeft">
          <Animation options={{}}>
            <a href="tel:+19194131792"><div className="contactBtn contactPhone">
              <img src={ contactPhone } alt="phoneIcon" className="phoneNone" />
              <img src={ contactPhoneHover } alt="phoneIcon" className="phoneHover" />
              <div className="phoneNumber">(919) 413-1792</div>
            </div></a>
          </Animation>
          <Animation options={{}}>
            <a href="mailto:wsd10205@gmail.com"><div className="contactBtn contactEmail">
              <img src={ contactGmail } alt="emailIcon" className="emailNone" />
              <img src={ contactGmailHover } alt="emailIconHover" className="emailHover" />
              <div className="emailTxt">wsd10205@gmail.com</div>
            </div></a>
          </Animation>
          <Animation options={{}}>
            <a href="https://www.linkedin.com/in/dubosews/"><div className="contactBtn contactLinkedin">
              <img src={ contactLinkedin } alt="linkedinIcon" className="linkedinNone" />
              <img src={ contactLinkedinHover } alt="linkedinIconHover" className="linkedinHover" />
              <div className="linkedinTxt">View Linkedin</div>
            </div></a>
          </Animation>
        </div>
        <div className="contactRight">
          <Animation options={{}}>
            <a href="https://github.com/dubosews"><div className="contactBtn contactGithub">
              <img src={ contactGithub } alt="githubIcon" className="githubNone" />
              <img src={ contactGithubHover } alt="githubIconHover" className="githubHover" />
              <div className="githubUser">View GitHub</div>
            </div></a>
          </Animation>
          <Animation options={{}}>
            <a href="https://www.facebook.com/wesley.dubose3"><div className="contactBtn contactFacebook">
              <img src={ contactFacebook } alt="facebookIcon" className="facebookNone" />
              <img src={ contactFacebookHover } alt="facebookIconHover" className="facebookHover" />
              <div className="facebookTxt">View Facebook</div>
            </div></a>
          </Animation>
          <Animation options={{}}>
            <a href="https://www.twitch.tv/clutch360noscope"><div className="contactBtn contactTwitch">
              <img src={ contactTwitch } alt="twitchIcon" />
              <div className="twitchTxt">View Twitch</div>
            </div></a>
          </Animation>
        </div>
      </div>
    </div>
  );
}
