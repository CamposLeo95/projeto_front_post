import { ReactNode, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

type ModalProviderProps = {
    children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {

    const [isModalPost, setIsModalPost] = useState(false)
    const [isModalUser, setIsModalUser] = useState(false)
    const [isModalNotice, setIsModalNotice] = useState(true)
    const [isModalPermission, setIsModalPermission] = useState(false)


    const [url, setUrl] = useState("")
    const [req, setReq] = useState("")
    const [buttonText, setButtonText] = useState("")
    const [titleText, setTitleText] = useState("")
    const [contentText, setContentText] = useState("")

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
            setIsModalPermission,
            isModalNotice,
            setIsModalNotice,
            titleText, 
            setTitleText,
            contentText,
            setContentText

        }}>
            {children}
        </ModalContext.Provider>
    )
}