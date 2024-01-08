import { createContext } from "react";

type contextProps = {
    isModalPost: boolean
    setIsModalPost: React.Dispatch<React.SetStateAction<boolean>>
    isModalUser: boolean
    setIsModalUser: React.Dispatch<React.SetStateAction<boolean>>
    isModalPermission: boolean
    setIsModalPermission: React.Dispatch<React.SetStateAction<boolean>>
    url: string
    setUrl: React.Dispatch<React.SetStateAction<string>>
    req: string
    setReq: React.Dispatch<React.SetStateAction<string>>
    buttonText: string
    setButtonText: React.Dispatch<React.SetStateAction<string>>
}

export const ModalContext = createContext<contextProps | undefined>(undefined)
