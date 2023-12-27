import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login"
import { Posts } from "../pages/Posts";


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/posts",
        element: <Posts />
    }
])