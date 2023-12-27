import { ReactNode } from "react"

interface ContainerCenterProps {
    children: ReactNode
}
export const ContainerCenter = ({children}: ContainerCenterProps) =>{
    return(
        <div className="w-full h-screen flex justify-center items-center bg-slate-950">
            {children}
        </div>
    )
}