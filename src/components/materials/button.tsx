

export default function Button({title}: {title: string}){
    return (
        <button className="uppercase font-light text-[12px] w-fit px-10 text-center rounded-full py-[7px] bg-primary text-[white]">{title}</button>
    )
}