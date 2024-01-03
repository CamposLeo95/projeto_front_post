import { Route, Routes } from 'react-router-dom'

import { Login } from "../pages/Login"
import { User } from "../pages/User"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" >
                <Route path="login" element={<Login />} />
                <Route path="user/:id" element={<User />} />
            </Route>
        </Routes>
    )
}