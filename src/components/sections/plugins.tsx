import PluginImage from "../../asset/images/plugin_image.svg"
import Button from "../materials/button";
import StudioImage2 from "../../asset/images/studio_image2.svg"

export default function Plugin(){
    return(
        <div className="relative">
            <section className="screen-padding plugin my-10 pt-[80px] xs:pt-[150px] sm:pt-[230px] md:pt-[300px] lg:pt-[420px] py-10 relative mt-[300px]">
                <img src={StudioImage2} className="absolute left-1/2 -translate-x-1/2 -top-[250px]" />
                <div className="flex flex-col-reverse gap-20 lg:gap-0 mt-5 md:mt-0 lg:flex-row  relative items-center justify-between z-30">
                    <img src={PluginImage} className="" />
                    <div className="w-full lg:w-[35%] ">
                        <p className="uppercase text-[#606060] font-bold opacity-50">plugins</p>
                        <p className="text-[#272727] text-[38px] font-extrabold md:text-[48px] leading-[55px]">Build your <span className="text-primary">digital studio</span></p>
                        <p className="text-[#958A8A] my-5 text-[18px] font-light">Try industry-leading music software for free, pay it off over time and own it forever.</p>
                        <Button title="try gear" />
                    </div>
                </div>
            </section>
        </div>
    )
}