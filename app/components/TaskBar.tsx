"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import battery from "../../public/images/battery.png"
import useAppStore from "../store/ProcessController";
import useStartStore from "../store/Start";
import useProcessController from "../store/ProcessController";


export default function Taskbar() {
    const [currentTime, setCurrentTime] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');

    const {runningProcesses} = useProcessController()
    const { setStartOpen }: any = useStartStore()
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}`);
        };

        const intervalId = setInterval(updateTime, 1000);
        const currentDate = new Date().toLocaleDateString();
        setCurrentDate(currentDate);
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="w-[100%] h-[5.4vh] bg-black flex justify-between items-center bottom-0 text-white px-5">
            <div className="flex">

                <div className="bg-white text-black p-3 hover:bg-gray-300" onClick={setStartOpen}>
                    Regashi
                </div>
                <div className="flex px-5 gap-5">
                    {runningProcesses.map((app) => (
                        <Image key={app.title} src={app.imageSrc} alt={app.title} className="w-[50px]" />
                    ))}
                </div>
            </div>
            <div className="flex align-bottom justify-end gap-4">
                    <Image src={battery} alt="battery" className="w-[70px]" />
                <div className="flex flex-col items-center justify-end p-2">
                    <span>{currentTime}</span>
                    <span>{currentDate}</span>
                </div>
            </div>
        </div>
    )
}