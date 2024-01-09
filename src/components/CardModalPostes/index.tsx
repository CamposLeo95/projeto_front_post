import { ReactEventHandler, useContext} from "react"
import { instance } from "../../config/axiosConfig"
import { ModalContext } from "../../contexts/ModalContext"
import NavContext from "../../contexts/NavContext"

export const CardModalPostes = () => {
    const modalContext = useContext(ModalContext)
    const navContext = useContext(NavContext)

    const title = modalContext?.titleText
    const content= modalContext?.contentText

    if (!modalContext) { return }

    const handleTitleChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        modalContext?.setTitleText(newTitle);
    
    };

    const handleContentChange = ( event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newContent = event.target.value;
        modalContext?.setContentText(newContent);
    };

    const handlePost: ReactEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

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
        <form 
            className=" w-2/5 h-auto bg-white p-9 flex flex-col gap-6 shadow-md rounded-md min-w-96 z-20"
        >
            <div className="flex flex-col">
                <label htmlFor="">Titulo</label>
                <input 
                    type="text" 
                    className="p-4 bg-slate-100" 
                    value={modalContext.titleText} 
                    onChange={handleTitleChange}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">
                    Conteudo
                </label>
                <textarea 
                    className="p-4 bg-slate-100 resize-none h-40" 
                    value={modalContext.contentText}
                    onChange={(e) => handleContentChange(e)}
                />
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