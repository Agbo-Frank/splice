import Wired from "../../asset/images/wired.svg"
import Billboard from "../../asset/images/billboard.svg"
import Complex from "../../asset/images/complex.svg"
import Verge from "../../asset/images/verge.svg"
import Variety from "../../asset/images/variety.svg"

export default function Companies(){
    const companies = [Variety, Verge, Billboard, Wired, Complex]
    return(
        <div className="my-16 px-14">
            <p className="text-center uppercase text-[#606060] opacity-50">featured in</p>
            <div className="flex justify-evenly my-10">
                {
                    companies.map((item, index) => (<img src={item} key={index} />))
                }
            </div>
        </div>
    )
}