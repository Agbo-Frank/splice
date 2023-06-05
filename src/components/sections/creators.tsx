import Button from "../materials/button";
import Word from "../../asset/images/word.svg"
import User1Image from "../../asset/images/user1.png"
import User2Image from "../../asset/images/user2.png"
import Comment from "../materials/comment";
import Volume from "../../asset/images/volume_up.svg"
import Unlock from "../../asset/images/unlock.svg"
import Download from "../../asset/images/download.svg"
import Play from "../../asset/images/play.svg"
import { useEffect, useState } from "react";
import { Feature } from "../materials/feature";

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

const feedbacks = [
    {
        img: User1Image,
        name: "Andrew Huang",
        comment: "I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration."
    },
    {
        img: User2Image,
        name: "KSHMR",
        comment: "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs."
    },
    {
        img: User2Image,
        name: "Kesha Lee",
        comment: "Its been fun to dive into Splices creator community and explore tools that support my own creative process."
    },
    {
        img: User1Image,
        name: "Andrew Huang",
        comment: "I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration."
    }
]


export default function Creator(){
    const [current_index, setCurrentIndex] = useState(0)
    const [current_index2, setCurrentIndex2] = useState(0)

    useEffect(() => {
        const timeId = setInterval(() => {
            setCurrentIndex(state => {
                if(state >= (features.length - 1)) return 0
                else return state + 1
            })

            setCurrentIndex2(state => {
                if(state >= (feedbacks.length - 1)) return 0
                else return state + 1
            })
        }, 3500)

        return () => {
            if(timeId) clearInterval(timeId)
        }
    },[])
    return(
        <div className="relative">
            <section className="creator">
                <div className="pt-10 relative mt-40">
                    <div className="screen-padding flex flex-col lg:flex-row items-center min-h-[800px] space-y-16 lg:space-y-0 lg:justify-between">
                        <div className="w-full lg:w-[35%] z-30">
                            <p className="text-[white] font-extrabold text-[38px] leading-[55px] md:text-[48px]">What <span className="text-primary">creators</span> are saying about Splice</p>
                            <p className="text-[#958A8A] font-light my-5 text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.</p>
                            <Button title="try studio" />
                        </div>
                        <div className="md:hidden block z-30">
                            {
                                feedbacks.map((item, index) => (
                                    <Comment key={index} show={current_index2 === index} data={item} />
                                ))
                            }
                            <div className="flex justify-center items-center space-x-3 my-[20px]">
                                {
                                    feedbacks.map((_, index)=> (
                                        <div 
                                            key={index}
                                            className={`w-[10px] cursor-pointer h-[10px] border border-primary rounded-full ${index === current_index2 && "bg-primary" }`}
                                            onClick={() => setCurrentIndex2(index)}
                                        ></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="space-y-10 hidden md:block z-30 -translate-x-8">
                            
                            <div className="flex space-x-7">
                                {
                                    feedbacks.slice(0, 2).map((item, index) => (
                                        <Comment show data={item} key={index} />
                                    ))
                                }
                            </div>
                            <div className="flex space-x-7 lg:translate-x-12">
                                {
                                    feedbacks.slice(2).map((item, index) => (
                                        <Comment show data={item} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                        <img src={Word} className="max-w-[800px] absolute -top-32 right-0 opacity-50 lg:opacity-100" />
                        
                    </div>
                    <div className="spiral py-[50px] px-6 md:px-14 my-16">
                        <p className="text-[white] my-[20px] md:my-[30px] font-bold text-[36px] text-center">As good as it sounds</p>
                        <div className="lg:hidden mx-auto w-fit mb-20 md:mb-40">
                            {features.map((feature, i) => <Feature key={i} show={current_index === i} feature={feature}/>)}
                            <div className="flex justify-center items-center space-x-3 my-[20px]">
                                {
                                    features.map((_, index)=> (
                                        <div 
                                            key={index}
                                            className={`w-[10px] cursor-pointer h-[10px] border border-[#A659FF] rounded-full ${index === current_index && "linear-gradient" }`}
                                            onClick={() => setCurrentIndex(index)}
                                        ></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="hidden lg:flex space-x-8 justify-between mb-40">
                            {features.map((feature, i) => <Feature key={i} show feature={feature}/>)}
                        </div>
                    </div>
                    <div className="jobs rounded-lg w-full md:rounded-[22px]">
                        <p className="text-center md:leading-9 text-[20px] py-[13px] md:py-[20px] md:text-[36px] text-white sm:w-1/2 font-bold">Come change the way people make music</p>
                        <button className="border text-xs border-white rounded-full my-2 md:my-5 py-2 px-12 uppercase font-light text-white">jobs at splice</button>
                    </div>
                </div>
            </section>
        </div>
    )
}