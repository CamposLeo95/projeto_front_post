// import { instance } from "../config/axiosConfig"

// type handlePostProps = {
//     event?: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined,
//     title?: string
//     content?: string
//     isModal?: boolean
//     setIsModal?: React.Dispatch<React.SetStateAction<boolean>>
// }

// export const handleCreatePost = async (
//     { event, setIsModal, isModal }: handlePostProps) => {
//     event.preventDefault()

//     // const title = title
//     // const content = content

//     if (!title || !content) {
//         alert('Por favor preencha todos os campos')
//         return
//     }

//     try {
//         const response = await instance.post('posts', { title, content })

//         console.log(response.data)
//         setIsModal(!isModal)

//     } catch (error) {
//         throw new Error('Error ao criar post')
//     }
// }