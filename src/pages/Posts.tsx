import { CardPosts } from "../components/CardPosts"

import { usePosts } from "../hooks/usePosts"

import rickImage from "../assets/rick.jpg"

import { useUser } from "../hooks/useUser"

export const Posts = () => {

    const {posts, id} = usePosts()
    const user = useUser(id)

    return(
        <div className="w-screen flex ">

        <div className="w-full grid grid-cols-4 justify-center px-10 my-16">
            <div className="p-4 col-span-1"> 
                <div 
                className="flex flex-col items-center gap-4 bg-blue-400 p-8 rounded-lg fixed h-screen">
                    <div className="w-36 rounded-full overflow-hidden flex justify-center bg-white border-solid border-slate-50">
                        <img src={rickImage} className="w-20" alt="" />   
                    </div>
                    <div className="p-3 bg-slate-50 w-full rounded-md text-center text-blue-500">
                        <p>{user?.name}</p>
                    </div>
                    <div className="p-3 bg-slate-50 w-full rounded-md text-center text-blue-500">
                        <p>{user?.admin ? "Administrador" : "usuario"}</p>
                    </div>
                    
                </div>
            </div>
            <div className="col-span-3 h-4/5 p-4 ">
                <div className="w-4/5 ">
                    <div className="flex flex-col-reverse gap-4  items-center p-4">
                        {posts && posts.map((post) =>(
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
        </div>
        </div>
    )
}