
import welcomeImage from '../assets/welcome.jpg'
import avisoImage from '../assets/aviso.png'

import { CardLogin } from "../components/CardLogin"
import { CardRegister } from "../components/CardRegister"
import { useContext, useState } from "react"
import { ModalContainer } from '../components/ModalContainer'
import { CardModalNotice } from '../components/CardModalNotice'
import { ModalContext } from '../contexts/ModalContext'

export const Login = () => {
    const modalContext = useContext(ModalContext)

    const noticeContents = [
        'Este foi um projeto criado para meu portfólio devido a isso a hospedagem dele foi feita de forma gratuita então possa ser que o servidor demore alguns segundos até iniciar.',
        'Portanto caso de algum erro ao se cadastrar ou tentar se conectar aguarde um minutinho e tente novamente!',
        'Muito Obrigado!'
        

    ]

    const [isRegister, setIsRegister] = useState(true)

    return (
<>
        {modalContext?.isModalNotice
            && <ModalContainer>
                 <CardModalNotice 
                    img={avisoImage} 
                    title='Aviso Importante! ' 
                    contents={noticeContents}/>
                </ModalContainer>
        }

        <div className="w-full h-screen flex justify-center items-center bg-gray-950">
            <div className="w-4/5 flex justify-center">
                <div className="flex justify-center w-1/2">
                    <img className="hidden sm:block" src={welcomeImage} alt="welcome" />
                </div>
                {isRegister
                    ? <CardLogin isRegister={isRegister} setIsRegister={setIsRegister} />
                    : <CardRegister isRegister={isRegister} setIsRegister={setIsRegister} />}
            </div>
        </div>
    </>
    )
}