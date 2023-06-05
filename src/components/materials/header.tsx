import Logo from "../icons/Logo";


export default function Header(){
    const navs = ["studio", "community", "sounds", "plugin", "blog"]
    const auth_navs = ["log in", "sign up"]
    return(
        <div className="absolute z-30 top-0 right-0 left-0 flex justify-between text-xs font-light items-center uppercase px-6 md:px-14 py-5 w-full">
            <div className="flex items-center space-x-14">
                <Logo />
                <ul className="hidden md:flex items-center space-x-5">
                    {
                        navs.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>

            <ul className="hidden md:flex items-center space-x-5">
                {
                    auth_navs.map((item, index) => (
                        <li style={{backgroundColor: "rgba(255, 255, 255, 0.26)"}} className="text-[white] backdrop-blur-sm uppercase rounded-full px-8 py-2" key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}