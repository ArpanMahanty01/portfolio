import { create } from "zustand";
import { Process, ProcessTitleChart } from "../constants/types";

import aboutMeIcon from "../../public/images/happy.png"
import projectsIcon from "../../public/images/monitor.png";
import blogsIcon from "../../public/images/note.png";
import contactIcon from "../../public/images/mail.png"

import Blogs from "../pages/Blogs";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import AboutMe from "../pages/AboutMe";

interface ProcessController {
  allProcesses:Process[],
  runningProcesses:Process[],
  runProcess:(PID:number)=>void,
  stopProcess:(PID:number)=>void,
  toggleFullScreen:(PID:number)=>void
}

const useProcessController = create<ProcessController>((set,get) => ({
    allProcesses:[
      {
        PID:0,
        title:ProcessTitleChart.About,
        imageSrc:aboutMeIcon,
        component:AboutMe,
        isActive:false,
        isFullscreen:false
      },
      {
        PID:1,
        title:ProcessTitleChart.Projects,
        imageSrc:projectsIcon,
        component:Projects,
        isActive:false,
        isFullscreen:false
      },
      {
        PID:2,
        title:ProcessTitleChart.Blogs,
        imageSrc:blogsIcon,
        component:Blogs,
        isActive:false,
        isFullscreen:false
      }
    ],
    runningProcesses: [],
    runProcess: (PID: number) =>
    set((state) => {
      const processToRun = state.allProcesses.find(
        (process) => process.PID === PID
      );

      if (processToRun && !state.runningProcesses.includes(processToRun)) {
        return {
          runningProcesses: [...state.runningProcesses, processToRun],
        };
      }

      return state;
    }),
    stopProcess: (PID: number) =>
    set((state) => ({
      runningProcesses: state.runningProcesses.filter(
        (process) => process.PID !== PID
      ),
    })),
    toggleFullScreen:(PID:number)=>
    set((state)=>{
      const updatedProcesses = state.allProcesses.map((process) =>
        process.PID === PID
          ? { ...process, isFullscreen: !process.isFullscreen }
          : process
      );
      return { allProcesses: updatedProcesses };
    })
  }));

export default useProcessController;