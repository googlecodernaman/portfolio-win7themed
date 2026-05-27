import React from 'react'
import { PDFViewer } from './PDFViewer'
import ProjectsWindow from './ProjectsWindow'
import AboutMeWindow from './AboutMeWindow'
import ContactWindow from './ContactWindow'

const Explorer = ({setIsShowFileExplorer, dialogConfig, setDialogConfig, listOfWindowsOpened, setListOfWindowsOpened} : any) => {

    const closeExplorer = () => {
        setDialogConfig({ name: '', src: '' });
        setListOfWindowsOpened((data: any) =>
            data.filter((item: any) => String(item['name']) !== String(dialogConfig['name']))
        );
        setIsShowFileExplorer(false);
    }

    const minimizeWindow = () => {
        setIsShowFileExplorer(false);
    }

    const getWindowTitle = () => {
        switch (dialogConfig.name) {
            case 'Resume':     return 'Resume — PDF Viewer';
            case 'My Projects': return 'My Projects — Internet Explorer';
            case 'About Me':   return 'About Me — System Properties';
            case 'Hire Me':    return 'Contact / Hire Me';
            default:           return 'Window';
        }
    }

    const renderContent = () => {
        switch (dialogConfig.name) {
            case 'Resume':      return <PDFViewer />;
            case 'My Projects': return <ProjectsWindow />;
            case 'About Me':    return <AboutMeWindow />;
            case 'Hire Me':     return <ContactWindow />;
            default:            return <div className="p-6">No content available</div>;
        }
    }

    return (
        /* Full-screen overlay so the window can be centered above the desktop */
        <div
            style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                /* Slight dim so the desktop is still visible */
                background: 'rgba(0,0,0,0.15)',
            }}
            /* Click the backdrop to minimise — like Win7 */
            onClick={minimizeWindow}
        >
            {/* Stop clicks inside the window from hitting the backdrop */}
            <div
                style={{
                    width: '80vw',
                    maxWidth: '960px',
                    height: '82vh',
                    display: 'flex',
                    flexDirection: 'column',
                    /* Drop shadow identical to Aero window shadow */
                    filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.55))',
                    /* Slide-in entrance animation */
                    animation: 'win7-open 0.18s ease-out',
                }}
                onClick={e => e.stopPropagation()}
            >
                <style>{`
                    @keyframes win7-open {
                        from { opacity: 0; transform: scale(0.96) translateY(6px); }
                        to   { opacity: 1; transform: scale(1)    translateY(0); }
                    }
                `}</style>

                <div className="window active" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="title-bar">
                        <div className="title-bar-text">{getWindowTitle()}</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize" onClick={minimizeWindow} />
                            <button aria-label="Maximize" />
                            <button aria-label="Close"    onClick={closeExplorer} />
                        </div>
                    </div>
                    <div
                        className="window-body has-space"
                        style={{ flex: 1, overflow: 'hidden', padding: 0 }}
                    >
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explorer
