import StudioImage from "../../asset/images/studio_image.svg"
import Button from "../materials/button";

export default function Studio(){
    return(
        <section className="relative px-6 md:px-14 py-10 my-10">
            <div className="flex flex-col space-y-14 md:space-y-0 md:flex-row items-center justify-between">
                <div className="md:w-[40%] lg:w-[35%]">
                    <p className="uppercase text-[#606060] opacity-50">studio</p>
                    <p className="text-[#272727] font-bold tex text-[48px]">Stay in <span className="text-primary">sync</span></p>
                    <p className="text-[#958A8A] my-3 text-[18px]">Try industry-leading music software for free, pay it off over time and own it forever.</p>
                    <Button title="try studio" />
                </div>
                <img src={StudioImage} className="md:w-[60%]" />
            </div>
        </section>
    )
}