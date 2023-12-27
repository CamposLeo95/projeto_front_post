import { useEffect,useState } from "react"
import { instance } from "../config/axiosConfig"

import { userProps } from "../interfaces/interfaces"

export const useUser = (idUser: number | undefined) =>{
    const [user, setUser] = useState<userProps>()

    useEffect(() => {

        getUser(idUser)
    }, [])

    const getUser = async (userId: number | undefined) => {
        try {
            const response = await instance.get(`/users/${userId}`)
            setUser(response.data.user)
    
        } catch (error) {
            console.error("Error na requisição", error);
            
        }
    }

    return user
}