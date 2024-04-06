import { StaticImageData } from "next/image";

export enum ProcessTitleChart {
    About = 'About Me',
    Projects = 'Projects',
    Blogs = 'Blogs',
    Contact = 'Contact Me'
}

export enum PIDChart {
    About = 0,
    Projects = 1,
    Blogs = 2,
    Contact = 3
}

export interface Process{
    PID:number,
    title:string,
    imageSrc:StaticImageData,
    component:React.FC<any>,
    isActive:boolean,
    isFullscreen:boolean
}