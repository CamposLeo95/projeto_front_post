import { ReactEventHandler, useContext, useRef } from "react"
import { ModalContext } from "../../contexts/ModalContext"
import { instance } from "../../config/axiosConfig"

export const CardModalUsers = () => {
    const nameRef = useRef<HTMLInputElement | null>(null)
    const senhaRef = useRef<HTMLInputElement | null>(null)

    const modalContext = useContext(ModalContext)

    const handlePost: ReactEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        const name = nameRef.current?.value
        const senha = senhaRef.current?.value

        !name || !senha && alert('Por favor preencha todos os campos')

        try {
            switch (modalContext?.req) {
                case "put": await instance.put(modalContext.url, { name, senha })
                    break
            }
            modalContext?.setIsModalUser(!modalContext.isModalUser)
        } catch (error) {
            throw new Error('Error ao criar post')
        }
    }

    return (
        <form className=" w-2/5 h-4/5 bg-white p-9 flex flex-col gap-6 shadow-md rounded-md min-w-96">
            <div className="flex flex-col">
                <label htmlFor="nome">Nome</label>
                <input type="text" className="p-4 bg-slate-100" ref={nameRef} name="nome" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="senha">Senha</label>
                <input type="text" className="p-4 bg-slate-100" ref={senhaRef} name="senha" />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 p-3 rounded-md text-white"
                onClick={handlePost}
            >
                {modalContext?.buttonText}
            </button>
            <button
                type="submit"
                className="w-full bg-gray-400 hover:bg-gray-500 p-3 rounded-md text-white"
                onClick={() => modalContext?.setIsModalUser(!modalContext.isModalUser)}
            >Cancelar</button>
        </form>
    )
}