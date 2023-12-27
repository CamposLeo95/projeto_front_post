import { ReactEventHandler, useRef } from "react"
import { instance } from "../../config/axiosConfig"

interface NewPostProps {
    isModal: boolean
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const NewPost = ({ isModal, setIsModal }: NewPostProps) => {
    const titleRef = useRef<HTMLInputElement | null>(null)
    const contentRef = useRef<HTMLTextAreaElement | null>(null)


    const handlePost: ReactEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()
        const title = titleRef.current?.value
        const content = contentRef.current?.value

        if (!title || !content) {
            alert('Por favor preencha todos os campos')
            return
        }

        try {
            const response = await instance.post('posts', { title, content })

            console.log(response.data)
            setIsModal(!isModal)


        } catch (error) {
            throw new Error('Error ao criar post')
        }
    }
    return (
        <div className="bg-opacity-65 bg-slate-600  w-screen h-screen flex justify-center items-center fixed z-10">
            <form className=" w-2/5 h-4/5 bg-white p-9 flex flex-col gap-6 shadow-md rounded-md">
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
                >Postar</button>
                <button
                    type="submit"
                    className="w-full bg-gray-400 hover:bg-gray-500 p-3 rounded-md text-white"
                    onClick={() => setIsModal(!isModal)}
                >Cancelar</button>
            </form>
        </div>
    )
}