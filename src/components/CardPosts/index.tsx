import { useContext, useState } from 'react'
import { Trash2, ThumbsUp, Pencil } from 'lucide-react'
import { instance } from '../../config/axiosConfig'
import { ModalContext } from '../../contexts/ModalContext'

interface CardPostsProps {
    id: number
    title: string
    content: string
    userName: string
    admin: boolean | undefined
}

export const CardPosts = ({ id, title, content, userName, admin }: CardPostsProps) => {
    const [like, setLike] = useState<boolean>(false)

    const modalContext = useContext(ModalContext)

    const handleLike = () => {
        setLike(!like)
    }

    const handleRemovePost = async (id: number) => {
        try {
            return await instance.delete(`/posts/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditPost = (id: number) => {
        modalContext?.setReq("put")
        modalContext?.setUrl(`/posts/${id}`)
        modalContext?.setIsModalPost(!modalContext.isModalPost)
        modalContext?.setButtonText("Editar Poste")
    }

    return (
        <>
            <div key={id} className="w-4/5 py-8 px-12 bg-white flex flex-col gap-6 rounded-sm shadow-md">
                <h3 className="font-bold">{title.toUpperCase()}</h3>
                <p>{content}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-3 justify-center items-center'>
                        <div className='w-5 cursor-pointer' onClick={handleLike}>
                            {like ? <ThumbsUp className='text-blue-500 w-5 ' /> : <ThumbsUp className='w-5 text-slate-400' />}
                        </div>
                        {admin &&
                            <>
                                <div className=' cursor-pointer ' onClick={() => handleEditPost(id)}>
                                    <Pencil className='w-5 text-slate-400' />
                                </div>
                                <div className=' cursor-pointer ' onClick={() => handleRemovePost(id)}>
                                    <Trash2 className='w-5 text-red-600' />
                                </div>
                            </>
                        }
                    </div>
                    <span className="text-slate-500 font-light text-sm self-end">{userName}</span>
                </div>
            </div>
        </>
    )
}