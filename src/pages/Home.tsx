import { CardPosts } from "../components/CardPosts"

import { usePosts } from "../hooks/usePosts"

import rickImage from "../assets/rick.jpg"

import { useUser } from "../hooks/useUser"


export const Home = () => {

    const { posts } = usePosts()


    const user = useUser()



    return (
        <>
            {/* <Header /> */}
            <div className="w-screen flex">
                <div className="flex justify-center w-80 bg-white shadow-md fixed ">
                    <div className="flex flex-col items-center gap-4  p-8  h-screen w-full relative">
                        {/* --------------Image-------------- */}
                        <div
                            className="w-24 h-24 rounded-xl overflow-hidden flex justify-center bg-white border-4 mb-8 rounded-bl-none rounded-br-none"
                        >
                            <img src={rickImage} className="w-12" alt="" />
                            <span className="absolute bg-slate-200 px-3 rounded-tl-none rounded-tr-none rounded-md text-white top-[125px] font-normal w-[96px] text-center">
                                {user?.admin ? "Admin" : "User"}
                            </span>
                        </div>
                        {/* --------------divider-------------- */}
                        <div className="border-t-2 w-full border-slate-200"></div>

                        {/* --------------User Info-------------- */}

                        <div className="p-2  w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <p>{user?.name}</p>
                        </div>
                        <div className="p-2  w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <p>Permissões</p>
                        </div>

                        {/* --------------divider-------------- */}
                        <div className="border-t-2 w-full border-slate-200"></div>

                        {user?.admin
                            ? <div
                                className="p-2 w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer"
                            >
                                <p>Criar Poste</p>
                            </div> :
                            ""
                        }

                        <div className="p-2  w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <p>Editar dados</p>
                        </div>
                        <div className="p-2  w-full rounded-md text-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 cursor-pointer">
                            <p>Sair</p>
                        </div>
                    </div>
                </div>
                <div className=" w-full  bg-slate-100  ml-80 min-h-screen ">
                    <div className="w-full my-6 flex 1 flex-col-reverse justify-center items-center gap-3">
                        {posts && posts.map((post) => (
                            <CardPosts
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                userName={post.user.name}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}