import { instance } from "../config/axiosConfig"
import { useEffect, useState } from "react"

import { postProps } from "../interfaces/interfaces"
import { useNavigate } from "react-router-dom"


export const usePosts = () => {
    const [posts, setPosts] = useState<postProps[]>()
    const [id, setId] = useState<number | undefined>()

    const navigate = useNavigate()

    useEffect(() => { getPosts() }, [])

    const getPosts = async () =>{
        try {
            const token = localStorage.getItem('token')
            const userId = Number(localStorage.getItem('userId'))

            if(token){
                instance.defaults.headers.common['Authorization'] = token
                const response = await instance.get('posts')
                setPosts(response.data)
                setId(userId)
            }else{
                console.log("nenhum token encontrado")
                return navigate('/login')
            }

        } catch (error) {
            console.log(error)
        }   
    }
        return {posts, id}
}