/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import React, { Component } from 'react';
import ViewSDKClient from '../tools/viewSDK';
import '../../css/resume.css';

class ResumeContainer extends Component {
    componentDidMount() {
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            viewSDKClient.previewFile("pdf-div", {
                /* Pass the embed mode option here */
                embedMode: "SIZED_CONTAINER"
            });
        });
    }

    render() {
        return (
          <div className="resumeContainer">
            <div className="resumeHeader">
              <div className="resumeH1">Wesley DuBose's Resume</div>
              <div className="resumeH2">Resume displayed below using the Adobe PDF Embed API</div>
              <div className="resumeH3">[.pdf File Download Available in the Options Menu Within the Viewer]</div>
            </div>
            <div id="pdf-div" className="sized-container-div resumePDFContainer"/>
          </div>
        );
    }
}

export default ResumeContainer;