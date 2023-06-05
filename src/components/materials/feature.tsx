export function Feature({feature, show}: {feature: {img: any; title: string; sub_title: string}, show: boolean}){
    return (
        <div className={`${show ? "flex flex-col items-center lg:items-start" : "hidden"} max-w-[300px] space-y-3 text-center lg:text-left`}>
            <img src={feature.img} />
            <p className="text-[22px] font-medium text-[white]">{feature.title}</p>
            <p className="text-[#958A8A] font-light">{feature.sub_title}</p>
        </div>
    )
}