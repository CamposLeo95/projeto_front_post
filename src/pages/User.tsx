import { useState } from "react"
import { FilePlus, KeyRound, LogOut, PenSquare, UserRound } from 'lucide-react'

import { CardPosts } from "../components/CardPosts"
import { NewPost } from "../components/NewPost"

import rickImage from "../assets/rick.jpg"

import { usePosts } from "../hooks/usePosts"
import { useUser } from "../hooks/useUser"

import { useParams, useNavigate } from "react-router-dom"

// import { handleCreatePost } from "../utils/ServicesPost"

export const User = () => {
    const [isModal, setIsModal] = useState(false)
    const { id } = useParams()

    const { posts } = usePosts()
    const user = useUser(Number(id))

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem('token')

        navigate('/login')
    }

    return (
        <>
            {isModal && <NewPost isModal={isModal} setIsModal={setIsModal} />}

            <div className="w-screen flex">
                <div className="flex justify-center w-80 bg-white shadow-md fixed ">
                    <div className="flex flex-col items-center gap-4  p-8  h-screen w-full relative">

                        {/* --------------Image-------------- */}
                        <div
                            className="w-24 h-24 rounded-xl overflow-hidden flex justify-center bg-white border-4 border-blue-400 mb-8 rounded-bl-none rounded-br-none"
                        >
                            <img src={rickImage} className="w-12" alt="" />
                            <span className="absolute bg-blue-400 px-3 rounded-tl-none rounded-tr-none rounded-md text-white top-[125px] font-normal w-[96px] text-center">
                                {user?.admin ? "Admin" : "User"}
                            </span>
                        </div>

                        {/* --------------divider-------------- */}
                        <div className="border-t-2 p-2 w-full border-slate-200"></div>

                        {/* --------------User Info-------------- */}
                        <div className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <UserRound />
                            <span className="flex-1">{user?.name}</span>
                        </div>

                        <div className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <KeyRound />
                            <span className="flex-1">Permissões</span>
                        </div>

                        {/* --------------divider-------------- */}
                        <div className="border-t-2 p-2 w-full border-slate-200"></div>

                        {user?.admin
                            ? <div className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                                <FilePlus />
                                <span className="flex-1" onClick={() => setIsModal(!isModal)}>Criar Poste</span>
                            </div> :
                            ""
                        }
                        <div className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <PenSquare />
                            <span className="flex-1">Editar dados</span>
                        </div>
                        <div className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer" onClick={handleLogout}>
                            <LogOut />
                            <span className="flex-1">Sair</span>
                        </div>
                    </div>
                </div>
                <div className=" w-full  bg-gray-900  ml-80 min-h-screen ">
                    <div className="w-full my-6 flex 1 flex-col-reverse justify-center items-center gap-3">
                        {posts && posts?.length > 0 ? posts.map((post) => (
                            <CardPosts
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                userName={post.user.name}
                                admin={user?.admin}
                            />
                        ))
                            : <h3 className="text-white"> Não há posts no Momento!</h3>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}