import { ReactNode, createContext, useState } from "react";

type UserProps = {
    children: ReactNode
}

type contextProps = {
    userId: number
    setUserId: React.Dispatch<React.SetStateAction<number>>
}

export const User = createContext<contextProps | undefined>(undefined)

export const UserProvider = ({ children }: UserProps) => {

    const [userId, setUserId] = useState<number>(0)

    return (
        <User.Provider value={{ userId, setUserId }}>
            {children}
        </User.Provider>
    )
}

