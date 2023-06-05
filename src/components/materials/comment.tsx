export default function Comment({data, show}: {data: {img: any, name: string, comment: string}, show: boolean}){
    return (
        <div className={`w-[290px] h-[216px] ${show ? "block" : "hidden"}  bg-[#202020] rounded-[3px] text-[white] p-7`}>
            <p>{data.comment}</p>
            <div className="flex items-center space-x-2 mt-2">
                <img className="w-[40px] h-[40px] rounded-full" src={data.img} />
                <div>
                    <p className="text-[11px]">{data.name}</p>
                    <p className="text-[8px]">Artist</p>
                </div>
            </div>
        </div>
    )
}