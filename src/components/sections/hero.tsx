import HeroImage from "../../asset/images/hero_image.png"
import Button from "../materials/button";
import Header from "../materials/header";


export default function Hero(){
    return(
        <div className="relative">
            <section className="hero">
                <div className="relative w-screen h-[95vh]">
                    <Header />
                    <div className="flex w-full h-full pl-14">
                        <div className="h-full w-[45%] flex flex-col justify-center">
                            <p className="hero_text">Where your music starts</p>
                            <p className="my-3 text-[17px]">Royalty-free sounds. Industry-leading software. Endless inspiration. Start creating with Splice.</p>
                            <Button title="sign up" />
                        </div>
                        <img className="absolute top-0 right-0 w-[50%]"  src={HeroImage}/>
                    </div>
                </div>
            </section>
        </div>
    )
}