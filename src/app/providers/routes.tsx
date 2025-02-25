import {createBrowserRouter} from "react-router";

import LoginForm from "../../features/auth/ui/LoginForm";
import RegisterForm from "../../features/auth/ui/RegisterForm";
import {MainPage} from "../../pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {HomePage} from "@/pages/HomePage";
import {CatalogPage} from "@/pages/CatalogPage";
import {AuthPage} from "@/pages/AuthPage";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "home",
                element: <HomePage/>,

            },
            {
                path: "/about",
                element: <AboutPage/>
            },
            {
                path: "/catalog",
                element: <CatalogPage/>
            },

            {
                path: "auth",
                element: <AuthPage/>,
                children: [
                    {
                        path: "registration",
                        element: <RegisterForm/>,
                    },
                    {
                        path: "login",
                        element: <LoginForm/>,
                    },
                ],

            }
        ],

    },


]);

export default routes;