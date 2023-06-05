import Button from "../materials/button";
import Word from "../../asset/images/word.svg"
import User1Image from "../../asset/images/user1.png"
import User2Image from "../../asset/images/user2.png"
import Comment from "../materials/comment";
import Volume from "../../asset/images/volume_up.svg"
import Unlock from "../../asset/images/unlock.svg"
import Download from "../../asset/images/download.svg"
import Play from "../../asset/images/play.svg"
import { useState } from "react";

function Feature({feature, show}: {feature: {img: any; title: string; sub_title: string}, show: boolean}){
    return (
        <div className={`${show ? "block" : "none"} max-w-[300px] space-y-3`}>
            <img src={feature.img} />
            <p className="text-[22px] text-[white]">{feature.title}</p>
            <p className="text-[#958A8A]">{feature.sub_title}</p>
        </div>
    )
}


export default function Creator(){
    const [current_index, setCurrentIndex] = useState(0)
    const features = [
        {
            img: Volume,
            title: "100 royalty free",
            sub_title: "Use sounds for anything. They’re cleared for commercial use."
        },
        {
            img: Unlock,
            title: "No commitments",
            sub_title: "Cancel your subscription at any time, no questions asked."
        },
        {
            img: Download,
            title: "Yours forever",
            sub_title: "Keep everything you download. Even if you cancel."
        },
        {
            img: Play,
            title: "Individual samples",
            sub_title: "Preview & download individual samples, not just full packs."
        }
    ]
    return(
        <div className="relative">
            <section className="creator">
                <div className="pt-10 relative mt-40">
                    <div className="px-6 md:px-14 flex flex-col lg:flex-row items-center min-h-[800px] justify-between">
                        <div className="w-full lg:w-[35%] z-30">
                            <p className="uppercase text-[#606060] opacity-50">studio</p>
                            <p className="text-[white] font-bold tex text-[48px]">What <span className="text-primary">creators</span> are saying about Splice</p>
                            <p className="text-[#958A8A] my-3 text-[18px]">Try industry-leading music software for free, pay it off over time and own it forever.</p>
                            <Button title="try studio" />
                        </div>
                        <div className="md:hidden block z-30">
                            <Comment Img={User1Image} />
                        </div>
                        <div className="space-y-10 hidden md:block z-30 -translate-x-8">
                            <div className="flex space-x-7">
                                <Comment Img={User1Image} />
                                <Comment Img={User2Image} />
                            </div>
                            <div className="flex space-x-7 lg:translate-x-12">
                                <Comment Img={User1Image} />
                                <Comment Img={User2Image} />
                            </div>
                        </div>
                        <img src={Word} className="max-w-[800px] absolute -top-32 right-0 opacity-50 lg:opacity-100" />
                        
                    </div>
                    <div className="spiral px-6 md:px-14 my-16">
                        <p className="text-[white] my-16 text-[36px] text-center">As good as it sounds</p>
                        <div className="flex justify-between mb-40">
                            {features.map((feature, i) => <Feature show={i === current_index}  feature={feature}/>)}
                        </div>
                    </div>
                    <div className="jobs rounded-lg w-full md:rounded-[22px]">
                        <p className="text-center md:leading-9 text-[20px] py-[13px] md:py-[20px] md:text-[36px] text-white md:w-1/2 font-medium md:font-extrabold">Come change the way people make music</p>
                        <button className="border text-xs border-white rounded-full my-2 md:my-5 py-2 px-12 uppercase text-white">jobs at splice</button>
                    </div>
                </div>
            </section>
        </div>
    )
}