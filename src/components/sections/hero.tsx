import HeroImage from "../../asset/images/hero_image.png"
import Button from "../materials/button";
import Header from "../materials/header";


export default function Hero(){
    return(
        <div className="relative">
            <section className="hero">
                <div className="relative w-screen h-[60vh] lg:h-[95vh]">
                    <Header />
                    <div className="absolute top-0 right-0 left-0 z-10 flex w-full h-full pl-6 md:pl-14">
                        <div className="h-full w-full lg:w-[45%] flex flex-col justify-center">
                            <p className="hero_text md:leading-[70px] font-[800] text-[7vw] md:text-[5.5vw]">Where your music starts</p>
                            <p className="my-3 text-[#595959] font-normal text-[17px]">Royalty-free sounds. Industry-leading software. Endless inspiration. Start creating with Splice.</p>
                            <Button title="sign up" />
                        </div>
                        <img className="absolute hidden lg:block top-0 right-0 w-[50%]"  src={HeroImage}/>
                    </div>
                </div>
            </section>
        </div>
    )
}