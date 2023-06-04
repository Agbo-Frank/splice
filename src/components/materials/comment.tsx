export default function Comment({Img}: {Img: any}){
    return (
        <div className="w-[290px] h-[216px] bg-[#202020] rounded-[3px] text-[white] p-7">
            <p>I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration.</p>
            <div className="flex items-center space-x-2 mt-2">
                <img className="w-[40px] h-[40px] rounded-full" src={Img} />
                <div>
                    <p className="text-[11px]">Andrew Huang</p>
                    <p className="text-[8px]">Artist</p>
                </div>
            </div>
        </div>
    )
}