import Button from "../materials/button";
import Word from "../../asset/images/word.svg"
import User1Image from "../../asset/images/user1.png"
import User2Image from "../../asset/images/user2.png"
import Comment from "../materials/comment";
import Volume from "../../asset/images/volume_up.svg"
import Unlock from "../../asset/images/unlock.svg"
import Download from "../../asset/images/download.svg"
import Play from "../../asset/images/play.svg"

function Feature({feature}: {feature: {img: any; title: string; sub_title: string}}){
    return (
        <div className="max-w-[300px] space-y-3">
            <img src={feature.img} />
            <p className="text-[22px] text-[white]">{feature.title}</p>
            <p className="text-[#958A8A]">{feature.sub_title}</p>
        </div>
    )
}


export default function Creator(){
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
        <section className="py-10 bg-[#0C0C0C]  relative mt-40">
            <div className=" px-14 flex items-center min-h-[800px] justify-between">
                <div className="w-[35%]">
                    <p className="uppercase">studio</p>
                    <p className="text-[white] font-bold tex text-[48px]">What <span className="text-primary">creators</span> are saying about Splice</p>
                    <p className="text-[#958A8A] my-3 text-[18px]">Try industry-leading music software for free, pay it off over time and own it forever.</p>
                    <Button title="try studio" />
                </div>
                <div className="space-y-10 z-30 -translate-x-8">
                    <div className="flex space-x-7">
                        <Comment Img={User1Image} />
                        <Comment Img={User2Image} />
                    </div>
                    <div className="flex space-x-7 translate-x-12">
                        <Comment Img={User1Image} />
                        <Comment Img={User2Image} />
                    </div>
                </div>
                <img src={Word} className="max-w-[800px] absolute -top-32 right-0" />
                
            </div>
            <div className="spiral my-24">
                <p className="text-[white] my-24 text-[36px] text-center">As good as it sounds</p>
                <div className="flex justify-between mb-40">
                    {
                        features.map((feature, i) => <Feature  feature={feature}/>)
                    }
                </div>
                
            </div>
        </section>
    )
}