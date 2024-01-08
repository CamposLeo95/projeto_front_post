import { ReactNode, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

type ModalProviderProps = {
    children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {

    const [isModalPost, setIsModalPost] = useState(false)
    const [isModalUser, setIsModalUser] = useState(false)
    const [isModalPermission, setIsModalPermission] = useState(false)
    const [url, setUrl] = useState("")
    const [req, setReq] = useState("")
    const [buttonText, setButtonText] = useState<string>("")

    return (
        <ModalContext.Provider value={{
            isModalPost, 
            setIsModalPost, 
            url, 
            setUrl, 
            req, 
            setReq, 
            buttonText, 
            setButtonText, 
            isModalUser, 
            setIsModalUser,
            isModalPermission,
            setIsModalPermission
        }}>
            {children}
        </ModalContext.Provider>
    )
}