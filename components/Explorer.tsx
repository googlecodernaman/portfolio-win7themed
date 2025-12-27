import React from 'react'
import dynamic from 'next/dynamic'
import { PDFViewer } from './PDFViewer'
import ProjectsWindow from './ProjectsWindow'
import AboutMeWindow from './AboutMeWindow'
import ContactWindow from './ContactWindow'

const Explorer = ({setIsShowFileExplorer, dialogConfig, setDialogConfig, listOfWindowsOpened, setListOfWindowsOpened} : any) => {
    const pdfPath : any = "public/assets/pdf/Eshwar_Esarapu.pdf"

    const closeExplorer = () => {
        setDialogConfig({
            name : "",
            src: ""
        });
        setListOfWindowsOpened((data : any) => data.filter((item : any) => String(item['name']) !== String(dialogConfig['name'])))
        setIsShowFileExplorer(false);
    }

    const minimizeWindow = () => {
        setIsShowFileExplorer(false);
    }

    const getWindowTitle = () => {
        switch(dialogConfig.name) {
            case 'Resume': return 'Resume - PDF Viewer';
            case 'My Projects': return 'My Projects';
            case 'About Me': return 'About Me';
            case 'Hire Me': return 'Contact / Hire Me';
            default: return 'Window';
        }
    }

    const renderContent = () => {
        switch(dialogConfig.name) {
            case 'Resume':
                return <PDFViewer />;
            case 'My Projects':
                return <ProjectsWindow />;
            case 'About Me':
                return <AboutMeWindow />;
            case 'Hire Me':
                return <ContactWindow />;
            default:
                return <div className="p-6">No content available</div>;
        }
    }

    return (
        <div>
            <div className="window active">
                <div className="title-bar">
                    <div className="title-bar-text">{getWindowTitle()}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={() => minimizeWindow()}></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={() => closeExplorer()}></button>
                    </div>
                </div>
                <div className="window-body has-space" style={{ height: 'calc(100vh - 80px)'}}>
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Explorer
