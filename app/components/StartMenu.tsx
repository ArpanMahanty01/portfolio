import useProcessController from "../store/ProcessController"
import Image from "next/image";

export default function StartMenu() {
    const { allProcesses } = useProcessController();
    return (
        <div className="bg-white h-[500px] w-[500px] border-[5px] border-black flex justify-between">
            <div>
                {allProcesses.map((process,index) => (
                    <div className="flex items-center p-5 gap-2 hover:text-gray-500 w-[100%]" key={index}>
                        <Image src={process.imageSrc} alt={process.title} className="w-[20px]" />
                        <span>{process.title}</span>
                    </div>
                ))}
            </div>
            <div className="bg-black w-[50%] flex flex-col text-white items-center justify-between p-10">
                <div>RottenTomato</div>
                <div> hello</div>
                <div className="flex flex-col gap-2">
                    <button className="bg-gray-400 p-2 hover:bg-red-600 w-[170px]">Shut down</button>
                    <button className="bg-gray-400 p-2 w-[170px] hover:bg-blue-500" onClick={()=>{window.location.reload()}}>Restart</button>
                </div>
            </div>
        </div>
    )
}