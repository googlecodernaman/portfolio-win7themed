import React, { useState, useEffect } from 'react'
import startMenuIcon from '@/public/assets/images/windows-7-start.png'
import hoverStartMenuIcon from '@/public/assets/images/windows-7-start-hover.png';
import Image from 'next/image';
import intnetExplorerImage from '@/public/assets/images/internet-explorer.png';
import emailIcon from '@/public/assets/images/email-icon.png';
import myComputerIcon from '@/public/assets/images/my-computer.png';
import gitHubIcon from '@/public/assets/images/github.png';
import linkedIn from '@/public/assets/images/linkedin.png';
import styles from './TaskBar.module.css';

const TaskBar = ({isShowStartMenu, setShowStartMenu, listOfWindowsOpened, setListOfWindowsOpened, isShowFileExplorer, setIsShowFileExplorer}: any) => {
    const [hover, setHover] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    // Live clock — updates every second
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            setCurrentDate(`${day}/${month}/${year}`);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const leftSidePrograms: any = [
        { name: "My Projects", icon: intnetExplorerImage },
        { name: "Contact Me", icon: emailIcon },
        { name: "About Me", icon: myComputerIcon },
        { name: "GitHub", icon: gitHubIcon },
        { name: "LinkedIn", icon: linkedIn }
    ];

    const minimizeOrMaximizeWindow: any = () => {
        setIsShowFileExplorer(() => !isShowFileExplorer);
    };

    return (
        <div>
            {/* ── Start Menu ─────────────────────────────────────── */}
            {isShowStartMenu && (
                <div
                    className="absolute bottom-10 left-0 w-[340px] h-[400px] rounded-sm overflow-hidden flex"
                    style={{
                        background: 'rgba(240, 246, 255, 0.88)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.8)',
                        border: '1px solid rgba(100, 160, 220, 0.6)',
                    }}
                >
                    {/* Left — Recent/pinned programs */}
                    <div
                        className="w-[55%] px-3 py-2 flex flex-col"
                        style={{
                            background: 'rgba(255,255,255,0.65)',
                            borderRight: '1px solid rgba(100,160,220,0.3)',
                        }}
                    >
                        <div className="flex flex-col gap-0.5 overflow-auto pr-1">
                            {leftSidePrograms.map((item: any, i: any) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-1.5 rounded cursor-pointer transition-colors"
                                    style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif', fontSize: '13px' }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'rgba(60,130,210,0.85)';
                                        const span = (e.currentTarget as HTMLElement).querySelector('span');
                                        if (span) span.style.color = 'white';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                        const span = (e.currentTarget as HTMLElement).querySelector('span');
                                        if (span) span.style.color = '';
                                    }}
                                >
                                    <Image src={item.icon} alt="" width={22} height={22} />
                                    <span style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif', fontSize: '13px', color: '#222' }}>
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Places panel */}
                    <div
                        className="w-[45%] px-3 py-4 text-sm text-white flex flex-col"
                        style={{
                            background: 'linear-gradient(180deg, rgba(30,100,190,0.92) 0%, rgba(10,60,140,0.97) 100%)',
                        }}
                    >
                        <div className="flex flex-col gap-0.5 mb-3">
                            {["Documents", "Pictures", "Music", "Computer", "Control Panel", "Default Programs", "Help and Support"].map((item, i) => (
                                <div
                                    key={i}
                                    className="px-2 py-1 rounded cursor-pointer"
                                    style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif', fontSize: '13px' }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', margin: '4px 0' }} />

                        <div className="mt-auto">
                            <button className="w-full">Shut down ▼</button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Taskbar ────────────────────────────────────────── */}
            <footer>
                <div
                    className="fixed bottom-0 left-0 right-0 h-10 flex items-center select-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(80,145,215,0.75) 0%, rgba(20,80,165,0.88) 50%, rgba(10,55,135,0.93) 100%)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        borderTop: '1px solid rgba(145,195,255,0.55)',
                        boxShadow: '0 -1px 0 rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.28)',
                    }}
                >
                    {/* Start button */}
                    <div className="h-full flex items-center px-3">
                        <Image
                            onClick={() => setShowStartMenu(!isShowStartMenu)}
                            src={hover ? hoverStartMenuIcon : startMenuIcon}
                            alt="start"
                            className="h-10 w-10 cursor-pointer"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                    </div>

                    {/* Thin separator */}
                    <div style={{ width: '1px', height: '70%', background: 'rgba(255,255,255,0.18)', margin: '0 4px' }} />

                    {/* Open windows in taskbar */}
                    <div className="flex-1 h-full flex items-center gap-1 px-2 overflow-x-auto">
                        {listOfWindowsOpened.map((icon: any, index: any) => (
                            <div
                                key={index}
                                className={`flex items-center cursor-pointer px-3 py-1 gap-2 ${styles.desktopIcon}`}
                                onClick={() => minimizeOrMaximizeWindow()}
                                title={icon.name}
                            >
                                <Image width={18} height={18} src={icon.src} alt={icon.name} />
                                <span className="text-white text-xs hidden sm:block" style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif', maxWidth: 80, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {icon.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* System tray — live clock */}
                    <div
                        className="flex items-center h-full px-4"
                        style={{
                            background: 'rgba(255,255,255,0.07)',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                        }}
                    >
                        <div className="text-right text-white leading-tight" style={{ fontFamily: '"Segoe UI", Tahoma, sans-serif' }}>
                            <div style={{ fontSize: '12px', fontWeight: 600 }}>{currentTime}</div>
                            <div style={{ fontSize: '10px', opacity: 0.82 }}>{currentDate}</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TaskBar;
