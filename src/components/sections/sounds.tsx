import Button from "../materials/button";


export default function Sounds(){
    // const companies = [Variety, Verge, Billboard, Wired, Complex]
    return(
        <div className="my-16 text-center mx-auto px-14 w-[704px]">
            <p className="uppercase text-[#606060] opacity-50">sounds</p>
            <p className="text-[#272727] font-bold tex text-[48px]">Find your <span className="text-primary">sound</span></p>
            <p className="text-[#958A8A] my-3 text-[18px]">Preview and download millions of royalty-free samples from top producers, artists, and sound designers. Available on desktop, web, and mobile.</p>
            <Button title="try sounds" />
        </div>
    )
}