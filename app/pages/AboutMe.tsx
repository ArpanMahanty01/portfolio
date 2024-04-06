import Image, { StaticImageData } from "next/image";
import cross from "../../public/images/close.png"
import face from "../../public/images/pxArt(1).png"
import git from "../../public/images/git.png"
import rust from "../../public/images/rust.png"
import azure from "../../public/images/azure.png"
import react from "../../public/images/react.png"
import next from "../../public/images/next.png"
import nodejs from "../../public/images/nodejs.png"
import go from "../../public/images/go.png"
import c from "../../public/images/c++.png"
import ts from "../../public/images/ts.png"

type skill = {
  name:string,
  src:StaticImageData
}

type Skills = skill[]

const skills:Skills = [
  {
    name:"Go",
    src:go
  },
  {
    name:"Typescript",
    src:ts
  },
  {
    name:"git",
    src:git
  },
  {
    name:"Azure",
    src:azure
  },
  {
    name:"React",
    src:react
  },
  {
    name:"Next",
    src:next
  },
  {
    name:"Nodejs",
    src:nodejs
  },
  {
    name:"Rust",
    src:rust
  },
  {
    name:"C++",
    src:c
  }
  
]

const AboutMe: React.FC = ({ stop, app }: any) => {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="w-[70%]">
        <div className="flex flex-col gap-5 items-center">
          <Image src={face} alt="image" className="w-[200px]"/>
          <span>
            Hello!, I&apos;m <span className="text-blue-700">Arpan Mahanty</span>, a sophomore studying <span className="text-blue-700">Electrical Engineering</span> at the prestigious <span className="text-blue-700">Indian Institute of Technology Roorkee</span>.. My academic journey has taken me on an exploration of diverse interests, with a focus on the fascinating world of software development.</span>
          <span>
            Driven by an insatiable curiosity, I find joy in crafting code and building digital experiences. Software development, for me, is more than a skill; it&apos;s a form of expression that allows me to bring ideas to life in the virtual realm.
          </span>
          <span>
            As I navigate through the dynamic landscape of technology, I am dedicated to continuous learning and staying abreast of the latest trends. Whether it&apos;s coding algorithms or designing user interfaces, I am passionate about leveraging technology to solve real-world problems and create meaningful solutions.
          </span>
          <span>
            Join me on this exciting journey as I immerse myself in the world of software development, eager to contribute to the ever-evolving tech landscape.
          </span>
        </div>
        <div className="p-10">
          <div>My Skills</div>
          <div className="flex gap-2">
            {skills.map((skill,index)=>(
              <div className="flex flex-col items-center justify-center " key={index}>
                <Image src={skill.src} alt={skill.name} className="w-[30px]"/>
                {/* <span>{skill.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
