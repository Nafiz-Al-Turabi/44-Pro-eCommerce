import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CustomDesign from "../Pages/CustomDesign/CustomDesign";
import UserDashboard from "../Dashboard/UserDashboard/UserDashboard";
import Cart from "../Components/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/customDesign',
                element: <CustomDesign />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/userdashboard',
                element: <UserDashboard />
            },
        ]
    },
]);