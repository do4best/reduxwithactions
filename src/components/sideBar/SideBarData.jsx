import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

export const SideBarData = [
    {
        title: "Home",
        icon: <FaHome size={25}/>,
        path: '#home'
    },
    {
        title: "Services",
        icon: <MdOutlineMiscellaneousServices size={25} />,
        path: '#services'
    },
    {
        title: "About",
        icon: <FcAbout size={25}/>,
        path: '#about'
    },
]