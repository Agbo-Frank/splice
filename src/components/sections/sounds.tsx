import Button from "../materials/button";


export default function Sounds(){
    // const companies = [Variety, Verge, Billboard, Wired, Complex]
    return(
        <div className="my-16 text-center mx-auto screen-padding w-full md:w-[704px] max-w-[704px]">
            <p className="uppercase text-[#606060] font-bold opacity-50">sounds</p>
            <p className="text-[#272727] font-extrabold text-[38px] md:text-[48px] leading-[55px">Find your <span className="text-primary">sound</span></p>
            <p className="text-[#958A8A] my-3 text-[18px] font-light">Preview and download millions of royalty-free samples from top producers, artists, and sound designers. Available on desktop, web, and mobile.</p>
            <Button title="try sounds" />
        </div>
    )
}