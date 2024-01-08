import { ReactEventHandler, useContext, useRef } from "react"
import { instance } from "../../config/axiosConfig"
import { ModalContext } from "../../contexts/ModalContext"
import NavContext from "../../contexts/NavContext"

export const CardModalPostes = () => {

    const titleRef = useRef<HTMLInputElement | null>(null)
    const contentRef = useRef<HTMLTextAreaElement | null>(null)

    const modalContext = useContext(ModalContext)
    const navContext = useContext(NavContext)

    if (!modalContext) { return }

    const handlePost: ReactEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        const title = titleRef.current?.value
        const content = contentRef.current?.value

        !title || !content && alert('Por favor preencha todos os campos')

        try {
            switch (modalContext.req) {
                case "post": await instance.post(modalContext.url, { title, content })
                    break
                case "put": await instance.put(modalContext.url, { title, content })
                    break
            }
            modalContext.setIsModalPost(!modalContext.isModalPost)
            if (window.innerWidth < 768) {
                 navContext?.setIsNav(false);
              }
        } catch (error) {
            throw new Error('Error ao criar post')
        }
    }

    return (
        <form className=" w-2/5 h-auto bg-white p-9 flex flex-col gap-6 shadow-md rounded-md min-w-96 z-20">
            <div className="flex flex-col">
                <label htmlFor="">Titulo</label>
                <input type="text" className="p-4 bg-slate-100" ref={titleRef} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Conteudo</label>
                <textarea className="p-4 bg-slate-100 resize-none h-40" ref={contentRef} />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 p-3 rounded-md text-white"
                onClick={handlePost}
            >
                {modalContext.buttonText}
            </button>
            <button
                type="submit"
                className="w-full bg-gray-400 hover:bg-gray-500 p-3 rounded-md text-white"
                onClick={() => modalContext.setIsModalPost(!modalContext.isModalPost)}
            >
                Cancelar
            </button>
        </form>

    )
}