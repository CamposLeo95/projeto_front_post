import { instance } from "../config/axiosConfig"
import { useEffect, useState } from "react"

import { postProps } from "../interfaces/interfaces"
import { useNavigate } from "react-router-dom"


export const usePosts = () => {
    const [posts, setPosts] = useState<postProps[]>()

    const navigate = useNavigate()

    useEffect(() => { getPosts() }, [posts])

    const getPosts = async () => {
        try {
            const token = localStorage.getItem('token')

            if (token) {
                instance.defaults.headers.common['Authorization'] = token
                const response = await instance.get('posts')
                setPosts(response.data)
            } else {
                console.log("nenhum token encontrado")
                return navigate('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return { posts }
}