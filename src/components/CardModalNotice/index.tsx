import { X } from "lucide-react"
import { ModalContext } from "../../contexts/ModalContext"
import { useContext } from "react"

interface CardModalNoticeProps {
    img: string
    title: string
    contents: string[]
}
export const CardModalNotice= ({img, title, contents} : CardModalNoticeProps) =>{

    const modalContext = useContext(ModalContext)

    return(
        <div
            className=" w-2/5  bg-white p-9 flex flex-col gap-6 shadow-md rounded-md min-w-96 z-20 items-center relative"
        >
            <div 
                className="absolute right-0 top-0 m-5 text-slate-400 cursor-pointer"
                onClick={() => modalContext?.setIsModalNotice(false)}
            >
                <X />
            </div>
            <img src={img} alt={img} className="w-20"/>
            <h2 className="font-semibold text-blue-500 text-lg">{title}</h2>
            {contents.map((content) => (
                <p>{content}</p>
            ))}
        </div>
    )
}