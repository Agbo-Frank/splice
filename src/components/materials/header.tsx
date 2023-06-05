import Logo from "../icons/Logo";
import MenuIcon from "../../asset/images/menu.png"
import CloseIcon from "../../asset/images/close.png"
import { useState } from "react";


export default function Header(){
    const [open_menu, setOpenMenu] = useState(false)
    const navs = ["studio", "community", "sounds", "plugin", "blog"]
    const auth_navs = ["log in", "sign up"]
    return(
        <>
            <div className={`${open_menu && "fixed"} z-50 top-0 right-0 left-0 flex justify-between text-xs font-light items-center uppercase px-6 md:px-14 py-5 w-full`}>
                <div className="flex items-center space-x-14">
                    <Logo />
                    
                    <ul className="hidden md:flex items-center space-x-5 font-normal">
                        {
                            navs.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>

                <ul className="hidden md:flex z-50 items-center space-x-5">
                    {
                        auth_navs.map((item, index) => (
                            <li 
                                style={{backgroundColor: index % 2 !== 0 ? "rgba(255, 255, 255, 0.26)" : "transparent"}} 
                                className={`text-[white] ${index % 2 !== 0 && "backdrop-blur-sm"} uppercase rounded-full px-8 py-2`} 
                                key={index}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <div 
                    className="w-[30px] h-[30px] z-50 block md:hidden cursor-pointer"
                    onClick={() => setOpenMenu(state => !state)}
                >
                    <img src={open_menu ? CloseIcon : MenuIcon} className="object-contain cursor-pointer w-full h-full" />
                </div>
            </div>
            {
                open_menu &&
                <div 
                    className={`fixed block md:hidden top-0 right-0 w-screen z-40 h-screen bg-black bg-opacity-50`}
                >
                    <ul className="absolute block md:hidden top-0 right-0 bg-white pt-16 pb-3 w-full h-fit overflow-y-hidden">
                            {
                                navs.concat(auth_navs).map((item, index) => (
                                    <li 
                                        className="text-center capitalize py-2 hover:bg-black hover:bg-opacity-10" 
                                        key={index}
                                        onClick={() => setOpenMenu(false)}
                                    >{ item }</li>
                                ))
                            }
                    </ul>
                </div>
            }
        </>
    )
}