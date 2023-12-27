import { useState } from 'react'
import { Trash2, Heart } from 'lucide-react'
import { instance } from '../../config/axiosConfig'


interface CardPostsProps {
    id: number
    title: string
    content: string
    userName: string
}


export const CardPosts = ({ id, title, content, userName }: CardPostsProps) => {


    const [like, setLike] = useState<boolean>(false)

    const handleLike = () => {
        console.log(setLike)
        setLike(!like)
    }

    const handleRemovePost = async (id: number) => {

        try {
            const response = await instance.delete(`/posts/${id}`)

            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div key={id} className="w-4/5 py-8 px-12 bg-white flex flex-col gap-6 rounded-sm shadow-md">
            <h3 className="font-bold">{title}</h3>
            <p>{content}</p>
            <div className='flex justify-between'>
                <div className='flex gap-3 justify-center items-center'>
                    <div className='w-5 cursor-pointer' onClick={handleLike}>
                        {like ? <Heart className='text-red-600 text-sm' /> : <Heart />}
                    </div>
                    <div className='w-5 cursor-pointer' onClick={() => handleRemovePost(id)}>
                        <Trash2 />
                    </div>
                </div>
                <span className="text-slate-500 font-light text-sm self-end">{userName}</span>
            </div>
        </div>
    )
}