import { ReactEventHandler, ReactNode, useContext, useRef } from "react"
import { ModalContext } from "../../contexts/ModalContext"

interface ModalContainerProps {
    children: ReactNode
}
export const ModalContainer = ({ children }: ModalContainerProps) => {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const modalContext = useContext(ModalContext)

    const closeModal: ReactEventHandler<HTMLDivElement> = (event) => {
        if (modalContext?.isModalPost) {
            event.target === containerRef.current && modalContext.setIsModalPost(false)
        }
        if (modalContext?.isModalUser) {
            event.target === containerRef.current && modalContext.setIsModalUser(false)
        }
    }

    return (
        <div
            className="bg-opacity-65 bg-slate-600  w-screen h-screen flex justify-center items-center fixed z-10" ref={containerRef}
            onClick={closeModal}
        >
            {children}
        </div>
    )
}