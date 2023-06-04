

export default function Button({title}: {title: string}){
    return (
        <button className="uppercase text-[14px] w-fit px-10 text-center rounded-full py-[7px] bg-primary text-[white]">{title}</button>
    )
}