

export default function Sounds(){
    // const companies = [Variety, Verge, Billboard, Wired, Complex]
    return(
        <div className="my-16 text-center px-14">
            <p className="uppercase">sounds</p>
            <p className="text-[#272727] tex text-[48px]">Find your <span className="text-primary">sound</span></p>
            <p className="text-[#958A8A] text-[18px]">Preview and download millions of royalty-free samples from top producers, artists, and sound designers. Available on desktop, web, and mobile.</p>
            <div className="flex justify-evenly my-10">
                {/* {
                    companies.map((item, index) => (<img src={item} key={index} />))
                } */}
            </div>
        </div>
    )
}