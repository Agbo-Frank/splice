import StudioImage from "../../asset/images/studio_image.svg"
import Button from "../materials/button";

export default function Studio(){
    return(
        <section className="relative screen-padding py-10 my-10">
            <div className="flex flex-col space-y-14 md:space-y-0 md:flex-row items-center justify-between">
                <div className="md:w-[40%] lg:w-[35%]">
                    <p className="uppercase text-[#606060] font-bold opacity-50">studio</p>
                    <p className="text-[#272727] font-extrabold text-[38px] leading-[55px] md:text-[48px] ">Stay in <span className="text-primary">sync</span></p>
                    <p className="text-[#958A8A] font-light my-5 text-[18px]">Try industry-leading music software for free, pay it off over time and own it forever.</p>
                    <Button title="try studio" />
                </div>
                <img src={StudioImage} className="md:w-[60%]" />
            </div>
        </section>
    )
}