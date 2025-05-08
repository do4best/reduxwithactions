import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { SideBarData } from "./SideBarData";

function MainSideBar() {
    const [isOpen, setIsOpen] = useState(true)
    const handelToggle = () => {
        setIsOpen(!isOpen)
    }
    return (<>
        <div className={`h-svw ${isOpen ? 'w-[55px]' : 'w-[250px]'} bg-amber-600     text-white`}>
            <div className="flex items-center  justify-between p-4 bg-blue-500">
                <button className=" bg-none  items-center  cursor-pointer" onClick={handelToggle}>

                    {isOpen?<FaArrowCircleRight size={25}/>:<FaArrowCircleLeft size={25}/>}
                </button>
                <div>
                    <h1 className="text-xl text-red-400 font-bold">{isOpen?'':'My App'}</h1>
                </div>
            </div>
            <nav className="">
                <ul className="   ">
                    {SideBarData?.map((item, index) => (
                        <li key={index} className=" ">
                            <a href={item.path} className="flex items-center justify-between px-4 py-2 hover:bg-amber-700 rounded">
                                {item.icon}
                                {isOpen?"":item.title}
                            </a>
                        </li>
                    ))}
                </ul>
          </nav>
            </div>
    
    </>);
}

export default MainSideBar;