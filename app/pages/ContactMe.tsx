import Image from "next/image";
import githubIcon from "../../public/images/GitHub.png"
import mailIcon from "../../public/images/mail.png"
import Link from "next/link";

const ContactMe: React.FC = ({stop,app}:any) => {
  const handleClickMail = ()=>{
    const email = 'arpanmahanty01@gmail.com';
    window.location.href = `mailto:${email}`;
  }
    return (
      <div className="flex flex-col items-center p-10 gap-10">
        <div className="flex flex-col items-center">
          <Link href={"https://github.com/ArpanMahanty01"} target="_blank">
          <Image src={githubIcon} alt="githubIcon" className="w-[60px]"/>
          </Link>
          <span>Github</span>
        </div>
        <div className="flex flex-col items-center" onClick={handleClickMail}>
          <Image src={mailIcon} alt="mailIcon" className="w-[60px]"/>
          <span>Mail me</span>
        </div>
      </div>
    );
  };
  
  export default ContactMe;
  