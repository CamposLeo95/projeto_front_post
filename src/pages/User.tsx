import { useContext, useEffect, useState } from 'react'

import { ModalContext } from '../contexts/ModalContext'
import NavContext from '../contexts/NavContext'

import { FilePlus, KeyRound, LogOut, PenSquare, UserRound, ArrowLeft, ArrowRight, X, Menu, MessageSquarePlus } from 'lucide-react'

import { CardPosts } from "../components/CardPosts"
import { ModalContainer } from '../components/ModalContainer'
import { CardModalPostes } from '../components/CardModalPostes'
import { CardModalUsers } from '../components/CardModalUsers'
import { CardModalPermissions } from '../components/CardModalPermissions'

import rickImage from "../assets/rick.png"
import mortyImage from "../assets/morty.png"
import joiaImage from "../assets/joia.png"

import { usePosts } from "../hooks/usePosts"
import { useUser } from "../hooks/useUser"

import { useParams, useNavigate } from "react-router-dom"

import { postProps } from '../interfaces/interfaces'
import { CardModalNotice } from '../components/CardModalNotice'

export const User = () => {
    // Params
    const { id } = useParams()

    // Hooks
    const { posts } = usePosts()
    const user = useUser(Number(id))

    // UseState
    const [newPosts, setNewPosts] = useState<postProps[]>()
    const [start, setStart] = useState<number>(0)
    const [end, setEnd] = useState<number>(3)
    const [page, setPage] = useState<number>(1)

    // Context
    const modalContext = useContext(ModalContext)
    const navContext = useContext(NavContext)

    // Navigate
    const navigate = useNavigate()

    //Contents
    const noticeContents = [
        'Olá! Meu nome é Leonardo e este é um projeto fullstack que desenvolvi utilizando React, Node e TypeScript.',
        'Construi me baseando em um ambiente de avisos para que os usuarios tenham a possibilidade de criar editar ou apagar postes baseando-se em suas permissões',
        'Vamos lá! crie um poste tambem! E deixe seu feedback sobre ou uma mensagem qualquer. Ficarei feliz em ler, um grande abraço!'

    ]

    useEffect(() => { 
        posts && 
        setNewPosts(posts.reverse().slice(start, end)) 
        }, [posts, end, start])

    const handlePrevSlice = (numerador: number) => {
        if (start < 0) {
            setStart(0)
            setEnd(3)
        } else {
            setStart(start - numerador)
            setEnd(end - numerador)
            setPage(page - 1)
        }
    }

    const handleNextSlice = (numerador: number) => {
        if (posts && end >= posts?.length) {
            setStart(start)
            setEnd(end)
        } else {
            setStart(start + numerador)
            setEnd(end + numerador)
            setPage(page + 1)
        }
    }

    const handleLogout = () => { localStorage.removeItem('token'), navigate('/') }

    const createPost = () => {
        modalContext?.setReq("post")
        modalContext?.setIsModalPost(!modalContext.isModalPost)
        modalContext?.setUrl("/posts")
        modalContext?.setButtonText("Criar Poste")
    }

    const editUser = () => {
        modalContext?.setReq("put")
        modalContext?.setIsModalUser(!modalContext.isModalUser)
        modalContext?.setUrl(`/users/${id}`)
        modalContext?.setButtonText("Editar Usuario")
    }

    const handleNav = () =>{
        navContext?.setIsNav(!navContext.isNav)
    }
    return (
        <>
            {modalContext?.isModalPost && <ModalContainer><CardModalPostes /></ModalContainer>}

            {modalContext?.isModalUser && <ModalContainer><CardModalUsers /></ModalContainer>}

            {modalContext?.isModalNotice
                && <ModalContainer>
                     <CardModalNotice 
                        img={joiaImage} 
                        title='Seja Bem vindo' 
                        contents={noticeContents}/>
                    </ModalContainer>
            }

            {modalContext?.isModalPermission
            && <ModalContainer><CardModalPermissions admin={user?.admin}/></ModalContainer>
            }


            <div className="w-screen flex bg-slate-800">
                {navContext?.isNav
                &&  <div className="flex w-screen justify-center fixed bg-slate-900 shadow-md sm:w-80 md:fixed">
                    <button 
                        className=' text-slate-400 absolute right-0 m-5 sm:hidden z-10' 
                        onClick={handleNav}
                    >
                        <X/>
                    </button>
                
                <div className="flex flex-col items-center gap-4  p-8  h-screen w-full relative">

                    {/* --------------Image-------------- */}

                    <div className="w-24 h-24 rounded-xl overflow-hidden flex justify-center bg-white border-4 border-blue-400 mb-8 rounded-bl-none rounded-br-none" >
                        {user?.admin
                            ? <img src={rickImage} className="w-full" alt="" />
                            : <img src={mortyImage} className="w-full" alt="" />
                        }
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

                    <div 
                        className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer"
                        onClick={() => modalContext?.setIsModalPermission(!modalContext.isModalPermission)}
                    >
                        <KeyRound/>
                        <span className="flex-1">Permissões</span>
                    </div>

                    {/* --------------divider-------------- */}

                    <div className="border-t-2 p-2 w-full border-slate-200"></div>
                        <div className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <FilePlus />
                            <span className="flex-1" onClick={createPost}>  Criar Poste </span>
                        </div>

                    <div
                        className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer"
                        onClick={editUser}
                    >
                        <PenSquare />
                        <span className="flex-1">Editar dados</span>
                    </div>
                    <div
                        className="px-4 py-2 flex justify-between items-center gap-4 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer"
                        onClick={handleLogout}
                    >
                        <LogOut />
                        <span className="flex-1">Sair</span>
                    </div>
                </div> 
                </div>
                }

               {!navContext?.isNav &&
               <div className='w-screen bg-slate-900 text-slate-400 py-5 px-7 flex justify-between fixed sm:hidden'>
                    <div>Logo</div>
                    <button onClick={handleNav}><Menu /></button>
                </div>
               }
               
                <div className=" w-full  bg-slate-800 min-h-screen pb-4 mt-16 sm:ml-80 sm:mt-0">
                <div className='w-full  text-slate-400 py-5 px-7 flex justify-end '>

                    <button 
                        className='p-5 bg-white rounded-full text-slate-800' 
                        onClick={createPost}
                    >
                        <MessageSquarePlus />
                    </button>

                </div>
                    
                    <div className="w-full my-5 flex 1 flex-col justify-center items-center gap-3 ">
                        {newPosts && newPosts?.length > 0 ? newPosts.map((post) => (
                            <CardPosts
                                key={post.id}
                                idPoste={post.id}
                                title={post.title}
                                content={post.content}
                                userName={post.user.name}
                                admin={user?.admin}
                                userId={post.user.id}
                            />
                        ))
                            : <h3 className="text-white"> Não há posts no Momento!</h3>
                        }
                    </div>
                    {posts && posts?.length > 3
                    
                    && <div className='w-full flex gap-4 py-3 justify-center '>
                        {start > 0
                            ? <button className='text-white' onClick={() => handlePrevSlice(3)}><ArrowLeft /></button>
                            : <button className='text-slate-300 cursor-auto'><ArrowLeft /></button>
                        }
                        <span className='text-white cursor-auto'>{page}</span>
                        {posts && end < posts?.length
                            ? <button className='text-white' onClick={() => handleNextSlice(3)}><ArrowRight /></button>
                            : <button className='text-slate-300 cursor-auto' ><ArrowRight /></button>
                        }
                    </div>
                    }
                </div>
            </div >
        </>
    )
}