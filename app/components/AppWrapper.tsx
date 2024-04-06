"use client"

import Image from "next/image";
import cross from "../../public/images/close.png"
import { Process } from "../constants/types";
import useProcessController from "../store/ProcessController";
import maximizeIcon from "../../public/images/maximize.png";
import minimizeIcon from "../../public/images/minimize.png"

export default function AppWrapper({ process }: any) {

    const { stopProcess, toggleFullScreen } = useProcessController();
    return (
        <div className={`w-[40vw] h-[80vh] border-[2px] border-black overflow-scroll bg-blue-200`}>
            <div className="w-[100%] h-[25px] bg-blue-600 sticky top-0 flex justify-between px-3">
                <span className="text-white">{process.title}</span>
                <div className="flex align-middle justify-center gap-2">
                    <Image src={minimizeIcon} className="w-[40px]" alt="minimizeIcon"/>
                    <span className="text-white mr-2" onClick={() => toggleFullScreen(process.PID)}><Image src={maximizeIcon} alt="maximizeIcon" className="w-[20px]"/></span>
                    <Image src={cross} alt="cross" className="w-[19px] h-[19px] hover:bg-gray-300" onClick={() => stopProcess(process.PID)} />
                </div>
            </div>
            <div className="">
                <process.component />
            </div>
        </div>
    )
}