import { ReactNode, useState } from "react";
import NavContext from "../contexts/NavContext";

interface NavProviderProps {
    children: ReactNode
}

export default function NavProvider({children} : NavProviderProps){
    const [isNav, setIsNav] = useState(true)

    return(
        <NavContext.Provider value={{isNav, setIsNav}}>
            {children}
        </NavContext.Provider>
    )
}