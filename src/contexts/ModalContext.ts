import { createContext } from "react";
type contextProps = {
    isModal: boolean
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    url: string
    setUrl: React.Dispatch<React.SetStateAction<string>>
    req: string
    setReq: React.Dispatch<React.SetStateAction<string>>
}
export const ModalContext = createContext<contextProps | undefined>(undefined)



