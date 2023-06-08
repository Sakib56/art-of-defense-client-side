import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/AllClasses/AllClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/instructors',
                element:<Instructors></Instructors>
            },
            {
                path:'/classes',
                element:<AllClasses></AllClasses>
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
]);

export default router;