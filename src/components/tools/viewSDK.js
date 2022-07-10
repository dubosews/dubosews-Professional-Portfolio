import ResumeFile from '../../docs/dubosewsResume.pdf';
import CertificateFile from '../../docs/dubosewsUNCCertificate.pdf';
import OutwardCertificate from '../../docs/dubosewsOutwardBound.pdf';

class ViewSDKClient {

    constructor() {
        this.readyPromise = new Promise((resolve) => {
            if (window.AdobeDC) {
                resolve();
            } else {
                document.addEventListener("adobe_dc_view_sdk.ready", () => {
                    resolve();
                });
            }
        });
        this.adobeDCView = undefined;
    }

    ready() {
        return this.readyPromise;
    }

    previewResume(divId, viewerConfig) {
        const config = {
            clientId: "8de373cceb0744de81c8ce0ab7c9b434",
        };
        if (divId) { 
            config.divId = divId;
        }
        this.adobeDCView = new window.AdobeDC.View(config);

        const previewFilePromise = this.adobeDCView.previewFile({
            content: {
                location: {
                    url: ResumeFile,
                },
            },
            metaData: {
                fileName: "dubosewsResume.pdf",
                id: "6d07d124-ac85-43b3-a867-36930f502ac6",
            },
        }, {defaultViewMode: "FIT_WIDTH", dockPageControls: false}, viewerConfig);

        return previewFilePromise;
    }

    previewCertificate(divId, viewerConfig) {
        const config = {
            clientId: "8de373cceb0744de81c8ce0ab7c9b434",
        };
        if (divId) {
            config.divId = divId;
        }
        this.adobeDCView = new window.AdobeDC.View(config);

        const previewFilePromise = this.adobeDCView.previewFile({
            content: {
                location: {
                    url: CertificateFile,
                },
            },
            metaData: {
                fileName: "dubosewsUNCCertificate.pdf",
                id: "6d07d124-ac85-43b3-a867-36930f502ac6",
            },
        }, {defaultViewMode: "fit", dockPageControls: false}, viewerConfig);

        return previewFilePromise;
    }

    previewOutward(divId, viewerConfig) {
        const config = {
            clientId: "8de373cceb0744de81c8ce0ab7c9b434",
        };
        if (divId) { 
            config.divId = divId;
        }
        this.adobeDCView = new window.AdobeDC.View(config);

        const previewFilePromise = this.adobeDCView.previewFile({
            content: {
                location: {
                    url: OutwardCertificate,
                },
            },
            metaData: {
                fileName: "dubosewsOutwardBound.pdf",
                id: "6d07d124-ac85-43b3-a867-36930f502ac6",
            },
        }, {defaultViewMode: "fit", dockPageControls: false}, viewerConfig);

        return previewFilePromise;
    }

    previewFileUsingFilePromise(divId, filePromise, fileName) {
        this.adobeDCView = new window.AdobeDC.View({
            clientId: "8de373cceb0744de81c8ce0ab7c9b434",
            divId,
        });

        this.adobeDCView.previewFile({
            content: {
                promise: filePromise,
            },
            metaData: {
                fileName: fileName
            }
        }, {});
    }

    registerSaveApiHandler() {
        const saveApiHandler = (metaData, content, options) => {
            console.log(metaData, content, options);
            return new Promise(resolve => {
                setTimeout(() => {
                    const response = {
                        code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                        data: {
                            metaData: Object.assign(metaData, {updatedAt: new Date().getTime()})
                        },
                    };
                    resolve(response);
                }, 2000);
            });
        };

        this.adobeDCView.registerCallback(
            window.AdobeDC.View.Enum.CallbackType.SAVE_API,
            saveApiHandler,
            {}
        );
    }

    registerEventsHandler() {
        this.adobeDCView.registerCallback(
            window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
            event => {
                console.log(event);
            },
            {
                enablePDFAnalytics: true,
            }
        );
    }
}

export default ViewSDKClient;
