'use client'
import React from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';
import AppWrapper from './AppWrapper';
import useProcessController from '../store/ProcessController';
import Link from 'next/link';
import mailIcon from "../../public/images/mail.png"
import githubIcon from "../../public/images/GitHub.png"
import instaIcon from "../../public/images/Instagram.png"
import linkdnIcon from "../../public/images/LinkedIn.png"


const AppGrid: React.FC = () => {

    const { allProcesses, runningProcesses, runProcess } = useProcessController()
    const handleClickMail = () => {
        const email = 'arpanmahanty01@gmail.com';
        window.location.href = `mailto:${email}`;
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 m-10">
            {allProcesses.map((app) => (
                <div
                    key={app.title}
                    className='text-white flex flex-col items-center hover:bg-blue-300 w-25'
                    onClick={() => runProcess(app.PID)}
                >
                    <Image src={app.imageSrc} alt={app.title} className='w-[50px]' />
                    <span className='text-black'>{app.title}</span>
                </div>
            ))}
            <Link href={"https://github.com/ArpanMahanty01"} target="_blank">
                <div className="flex flex-col items-center hover:bg-blue-300">
                    <Image src={githubIcon} alt="githubIcon" className="w-[50px]" />
                    <span>Github</span>
                </div>
            </Link>
            <div className="flex flex-col items-center hover:bg-blue-300" onClick={handleClickMail}>
                <Image src={mailIcon} alt="mailIcon" className="w-[50px]" />
                <span>Mail</span>
            </div>
            <Link href={'https://www.instagram.com/mahanty.arpan?igsh=MTltdzBwd3A2ZXF5aw=='} target="_blank">
                <div className='flex flex-col items-center hover:bg-blue-300'>
                    <Image src={instaIcon} alt="instagramIcon" className="w-[50px]" />
                    <span>Instagram</span>
                </div>
            </Link>
            <Link href={'https://www.linkedin.com/in/arpan-mahanty-089b3824b/'} target="_blank">
                <div className='flex flex-col items-center hover:bg-blue-300'>
                    <Image src={linkdnIcon} alt="linkdnIcon" className="w-[50px]" />
                    <span>Linkedin</span>
                </div>
            </Link>
            {runningProcesses.map((process,index) => (
                <Draggable key={index}>
                    <div className={`absolute bg-white ${process.isFullscreen ? "top-0 left-0" : "top-5 left-5"}`} >
                        <AppWrapper process={process} />
                    </div>
                </Draggable>
            ))}

        </div>
    );
};

export default AppGrid;
