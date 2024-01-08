import { ModalContainer } from "../ModalContainer"

interface CardModalPermissionsProps {
admin: boolean | undefined
}
export const CardModalPermissions =({admin} : CardModalPermissionsProps)=>{
    const usuario = admin ? "Administrador" : "Usuário"

    const admPermissions = [
        "visualizar todos os Postes",
        "Criar Postes",
        "Editar seus Postes",
        "Excluir seus Postes",
        "Excluir Postes de outros usuarios"
    ]
    const userPermissions = [
        "Visualizar todos os Postes",
        "Criar Postes",
        "Editar seus Postes",
        "Excluir seus Postes",
    ]

    return(
        <ModalContainer>
            <div 
                className=" w-2/5 h-4/5 bg-white p-9 flex flex-col gap-6 shadow-md rounded-md min-w-96 z-20"
            >
                <div>
                    <span className="text-blue-500 font-bold uppercase">{usuario}</span>
                </div>
                <div>
                    <span>
                        Suas permissões como 
                        <span className="text-blue-500 font-bold uppercase"> {usuario} </span> 
                        são:
                    </span>
                </div>
                <div>
                    <ul className="flex flex-col gap-5">
                        {admin 
                            ? admPermissions.map((permission, id) =>( 
                                <li key={id}>
                                    <span>{id + 1}</span> - {permission}
                                </li>
                            ))
                            : userPermissions.map((permission, id) => (
                                <li key={id}>
                                    <span>{id + 1}</span> - {permission}
                                </li>
                            ))
                     }
                    </ul>
                </div>


            </div>
        </ModalContainer>
    )
}