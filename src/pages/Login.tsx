import { ReactEventHandler, useRef } from "react"
import { instance } from "../config/axiosConfig"
import { useNavigate } from "react-router-dom"
import { ContainerCenter } from "../layouts/ContainerCenter"

import welcomeImage from '../assets/welcome.jpg'

export const Login = () => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    const navigate = useNavigate()

    const handleSubmit: ReactEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault()

        const email = emailRef.current?.value
        const senha = passwordRef.current?.value

        try {

            const response = await instance.post('login', { email, senha })

            if (response.status === 200 && response.data.token) {

                const token = response.data.token
                const idUser = response.data.id

                localStorage.setItem('token', token)
                localStorage.setItem('userId', idUser)

                return navigate("/posts")
            } else {
                throw new Error('Resposta inesperado do servidor')
            }


        } catch (error) {
            alert('Usuario não encontrado!')
            console.log("error ao realizar login", error)
        }
    }

    return (
        <ContainerCenter>
            <div className="w-4/5 flex justify-center">
                <div className="flex justify-center w-1/2">
                    <img className="" src={welcomeImage} alt="welcome" />
                </div>

                <form className=" p-10 flex flex-col justify-center items-center gap-16  bg-slate-50">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-blue-400">Email</label>
                        <input type="email" id="email" ref={emailRef} className="p-3 outline-none rounded-md text-blue-400 border-b-4 border-blue-400" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="pass" className="text-blue-400">Senha</label>
                        <input type="password" id="pass" ref={passwordRef} className="p-3 outline-none rounded-md text-blue-400 border-b-4 border-blue-400" />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-400 w-4/5 p-4 rounded-lg text-slate-100 font-extrabold hover:bg-blue-500 text-xl"
                    >Entrar</button>
                    <p className="text-slate-400">
                        Não possui conta? 
                        <span className="hover:text-blue-400 cursor-pointer"> Cadastre-se!</span>
                    </p>
                </form>
            </div>
        </ContainerCenter>
    )
}