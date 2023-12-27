import { useEffect, useState, useContext } from "react"
import { instance } from "../config/axiosConfig"

import { User } from "../Context/UserContext"

import { userProps } from "../interfaces/interfaces"


export const useUser = () => {
    const [user, setUser] = useState<userProps>()

    const userContext = useContext(User)

    useEffect(() => {

        getUser(userId)

    }, [])


    if (!userContext) { return null }

    const { userId } = userContext


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