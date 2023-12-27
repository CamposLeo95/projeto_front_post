export interface postProps{
    id: number
    title: string
    content: string
    userId:number
    user:{
        admin: boolean
        email: string
        id: number
        name:string
    }
}

export interface userProps {
    id: number,
    email: string
    name:string
    admin: boolean
}