
export const Header = () =>{
    return(
        <div className="h-14 w-screen bg-blue-400 flex justify-center fixed">
            <div className="w-4/5 flex items-center justify-between text-slate-50 font-extrabold">
                <div className="cursor-pointer">FakeComunity</div>
                <div>
                    <ul>
                        <li className="cursor-pointer">Sair</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}