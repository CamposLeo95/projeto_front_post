import { ReactNode, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

type ModalProviderProps = {
    children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {

    const [isModal, setIsModal] = useState(false)
    const [url, setUrl] = useState("")
    const [req, setReq] = useState("")

    return (
        <ModalContext.Provider value={{ isModal, setIsModal, url, setUrl, req, setReq }}>
            {children}
        </ModalContext.Provider>
    )
}