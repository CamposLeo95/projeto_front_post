import { createContext } from "react";

interface NavContextProps {
    isNav: boolean
    setIsNav: React.Dispatch<React.SetStateAction<boolean>>
}

const NavContext = createContext<NavContextProps | undefined>(undefined)

export default NavContext