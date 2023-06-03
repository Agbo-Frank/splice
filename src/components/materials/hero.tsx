import Header from "./header";
import HeroImage from "../../asset/images/hero_image.png"

export default function Hero(){
    return(
        <section className="hero">
            <div className="relative w-screen h-[95vh]">
                <Header />
                <div className="flex w-full h-full pl-14">
                    <div className="h-full w-[45%] flex flex-col justify-center">
                        <p className="hero_text">Where your music starts</p>
                        <p className="my-3 text-[17px]">Royalty-free sounds. Industry-leading software. Endless inspiration. Start creating with Splice.</p>
                        <button className="uppercase text-[14px] w-fit px-10 text-center  rounded-full py-1 bg-primary text-[white]">sign up</button>
                    </div>
                    <img className="absolute top-0 right-0 w-[50%]"  src={HeroImage}/>
                </div>
            </div>
        </section>
    )
}