import { MdCastForEducation,MdLocationPin } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
function Education() {
    return (<>
        <div>
    
     <ul className="ml-5">
                    <li className=""><span className="flex items-center p-2 gap-2 "><MdCastForEducation size={20} />
                        <span className="text-xl">Graudation,PU</span></span></li>
                    <li><span className="flex p-2 gap-2 items-center "><BsCalendarDate size={20} />
                        <span className="text-xl">+92320-4522701</span></span></li>
                    <li><span className="flex p-2 gap-2 items-center "><MdLocationPin size={20} />
                        <span className="text-xl">Lahore.Pk</span></span></li>
                     
            </ul>
            </div>
    </>);
}

export default Education;