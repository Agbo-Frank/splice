import Logo from "../icons/Logo";
import Facebook from "../../asset/images/facebook.svg"
import Twitter from "../../asset/images/twitter.svg"
import Instagram from "../../asset/images/instagram.svg"
import Youtube from "../../asset/images/youtube.svg"

function FooterList({title, list}: {title: string, list: string[]}){
    return(
        <ul>
            <li className="uppercase mb-4 font-semibold">{title}</li>
            {
                list.map((item, index) => (
                    <li className="text-[#606060] text-[13px] mb-3 capitalize" key={index}>{item}</li>
                ))
            }
        </ul>
    )
}

export default function Footer(){
    const media = [Facebook, Twitter, Instagram, Youtube]
    const footer_list = [
        {
            title: "studio",
            list: ["features", "about splice studio", "managing your production library", "collaborating with baewatch"]
        }, 
        {
            title: "community",
            list: ["Ableton Live Projects", "FL Studio Projects", "Logic Pro X Projects", "Garageband Projects", "Remix Contests", "Tiestos Secrets"]
        }, 
        {
            title: "sound",
            list: ["features", "Catalog", "How Jauz Uses Sounds", "deadmau5s Chimaera", "KSHMR Vol. 2"]
        }, 
        {
            title: "plugins",
            list: ["Top VSTs", "Serum", "Rent to Own", "Free Plugins", "Top Manufacturers"]
        }, 
        {
            title: "beatmaker",
            list: ["Create Your Own Beat", "Wakapella", "Just Blaze"]
        },
        {
            title: "blog",
            list: ["Latest Posts", "Using Soundtoys Decapitator", "Mastering 101", "Producing Future Beats", "Belonging at Splice"]
        }
    ]
    return(
        <footer className="screen-padding mt-48 mb-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-5">
            <div className="flex md:block flex-col justify-between items-center space-y-2 md:w-[20%]">
                <Logo />
                <p className="text-[#606060] text-[11px] text-center md:text-left">2021 Splice.com All Rights Reserved</p>
            </div>
            <div className="md:w-[55%] grid grid-cols-3 gap-5 md:gap-10">
                {
                    footer_list.map((item, index) => <FooterList {...item} key={index} />)
                }
            </div>
            <div className="md:w-[23%] flex md:block flex-col items-center">
                <h1 className="text-[#0C0C0C] uppercase text-[15px]">find us on social</h1>
                <ul className="flex space-x-5 my-4">
                    {
                        media.map((item, index) => <li key={index}><img src={item}/></li>)
                    }
                </ul>  
                <ul className="flex flex-wrap capitalize text-xs text-[#606060]">
                    {
                        ["terms of use", "privacy policy", "jobs", "contact", "help"].map(item => (
                            <li className="mr-8 font-light" key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}