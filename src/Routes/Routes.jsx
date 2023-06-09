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
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MySelectedClasses from "../Pages/Dashboard/Students/MySelectedClass";
import Payment from "../Pages/Dashboard/Students/Payment";
import MyEnrolledClasses from "../Pages/Dashboard/Students/MyEnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/Students/PaymentHistory";
import InstructorHome from "../Pages/Dashboard/Instructor/InstructorHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <AllClasses></AllClasses>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mySelectedClass',
                element: <PrivateRoute><MySelectedClasses></MySelectedClasses></PrivateRoute>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'myEnrolledClasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            },
            {
                path:'instructor',
                element:<InstructorHome></InstructorHome>
            }

        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;