import { ReactEventHandler, useRef } from "react"

import { instance } from "../../config/axiosConfig"

import { useNavigate } from "react-router-dom"

type CardLoginProps = {
    isRegister: boolean
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardLogin = ({ isRegister, setIsRegister }: CardLoginProps) => {

    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()

    const handleSubmit: ReactEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        const email = emailRef.current?.value
        const senha = passwordRef.current?.value

        try {
            const response = await instance.post('login', { email, senha })
            response.status === 200 && localStorage.setItem('token', response.data.token)
            return navigate(`/user/${response.data.id}`)

        } catch (error) {
            alert('Usuario não encontrado!')
            console.log("error ao realizar login", error)
        }
    }

    return (
        <form className=" w-80 p-8 flex flex-col justify-center items-center gap-16 bg-slate-200">
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-blue-400">Email</label>
                <input type="email" id="email" ref={emailRef} className="p-3 outline-none rounded-md text-blue-400 border-b-4 border-blue-400" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label htmlFor="pass" className="text-blue-400">Senha</label>
                <input type="password" id="pass" ref={passwordRef} className="p-3 outline-none rounded-md text-blue-400 border-b-4 border-blue-400" />
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-400 w-full p-4 rounded-lg text-slate-100 font-bold hover:bg-blue-500 text-sm"
            >Entrar</button>
            <p className="text-slate-400">
                Não possui conta?
                <span
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => setIsRegister(!isRegister)}
                > Cadastre-se!</span>
            </p>
        </form>
    )
}