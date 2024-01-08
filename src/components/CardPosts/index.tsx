import { useContext, useState } from 'react'
import { Trash2, ThumbsUp, Pencil } from 'lucide-react'
import { instance } from '../../config/axiosConfig'
import { ModalContext } from '../../contexts/ModalContext'
import { useParams } from 'react-router-dom'


interface CardPostsProps {
    idPoste: number
    title: string
    content: string
    userName: string
    admin: boolean | undefined
    userId: number
}

export const CardPosts = ({ idPoste, title, content, userName, admin, userId }: CardPostsProps) => {
    const [like, setLike] = useState<boolean>(false)
    // const [postes, setPostes] = useState()

    const modalContext = useContext(ModalContext)

    const { id } = useParams()

    // const teste = false

    // const handleUser = async () => {

    //     try {
    //         return await instance.get(`/posts`)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    const handleRemovePost = async (idPoste: number) => {
        try {
            return await instance.delete(`/posts/${idPoste}`)
        } catch (error) {
            console.error(error)
        }
    }

    const handleEditPost = (idPoste: number) => {
        modalContext?.setReq("put")
        modalContext?.setUrl(`/posts/${idPoste}`)
        modalContext?.setIsModalPost(!modalContext.isModalPost)
        modalContext?.setButtonText("Editar Poste")
    }

    return (
        <>
            <div key={idPoste} className="w-4/5 py-8 px-12 bg-white flex flex-col gap-6 rounded-sm shadow-md">
                <h3 className="font-bold">{title.toUpperCase()}</h3>
                <p>{content}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-3 justify-center items-center'>
                        <div className='w-5 cursor-pointer' onClick={() => setLike(!like)}>
                            {like ? <ThumbsUp className='text-blue-500 w-5 ' /> : <ThumbsUp className='w-5 text-slate-400' />}
                        </div>
                        {admin || userId == Number(id) ?
                            <>
                                <div className=' cursor-pointer ' onClick={() => handleEditPost(idPoste)}>
                                    <Pencil className='w-5 text-slate-400' />
                                </div>
                                <div className=' cursor-pointer ' onClick={() => handleRemovePost(idPoste)}>
                                    <Trash2 className='w-5 text-red-600' />
                                </div>
                            </>
                        : null}
                    </div>
                    <span className="text-slate-500 font-light text-sm self-end">{userName}</span>
                </div>
            </div>
        </>
    )
}