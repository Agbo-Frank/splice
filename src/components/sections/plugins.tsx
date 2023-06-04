import PluginImage from "../../asset/images/plugin_image.svg"
import Button from "../materials/button";

export default function Plugin(){
    return(
        <section className="px-14">
            <div className="flex items-center justify-between">
                <img src={PluginImage} />
                <div className="w-[35%]">
                    <p className="uppercase">plugins</p>
                    <p className="text-[#272727] font-bold tex text-[48px]">Build your <span className="text-primary">digital studio</span></p>
                    <p className="text-[#958A8A] my-3 text-[18px]">Try industry-leading music software for free, pay it off over time and own it forever.</p>
                    <Button title="try gear" />
                </div>
            </div>
        </section>
    )
}