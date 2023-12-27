import { useState } from 'react'
import heartLike from '../../assets/like.png'
import heartUnlike from '../../assets/unlike.png'
interface CardPostsProps {
    id: number
    title: string
    content:string
    userName: string
}
export const CardPosts = ({id, title, content, userName} : CardPostsProps)=>{

    const [like, setLike] = useState<boolean>(false)

    const handleLike = () => {
        console.log(setLike)
        setLike(!like)
    }

    return(
        <div key={id} className="w-4/5 p-5 bg-slate-100 flex flex-col gap-6">
            <h3 className="font-bold">{title}</h3>
            <p>{content}</p>
            <div className='flex justify-between'>
                <div className='w-5 cursor-pointer' onClick={handleLike}>
                    {like ? <img src={heartLike}/> : <img src={heartUnlike} /> }
                </div>
                <span className="text-slate-500 font-light text-sm self-end">{userName}</span>
            </div>
        </div>
    )
}