import StudioImage from "../../asset/images/studio_image.svg"
import Button from "../materials/button";

export default function Studio(){
    return(
        <section className="px-14 py-10">
            <div className="flex items-center justify-between">
                <div className="w-[35%]">
                    <p className="uppercase">studio</p>
                    <p className="text-[#272727] font-bold tex text-[48px]">Stay in <span className="text-primary">sync</span></p>
                    <p className="text-[#958A8A] my-3 text-[18px]">Try industry-leading music software for free, pay it off over time and own it forever.</p>
                    <Button title="try studio" />
                </div>
                <img src={StudioImage} />
            </div>
        </section>
    )
}