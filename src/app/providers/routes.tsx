import {createBrowserRouter} from "react-router";
import HomePage from "../../pages/HomePage/ui/HomePage.tsx";
import LoginForm from "../../features/auth/ui/LoginForm.tsx";
import RegisterForm from "../../features/auth/ui/RegisterForm.tsx";
import {MainPage} from "../../pages/MainPage";
import AboutPage from "../../pages/AboutPage/ui/AboutPage.tsx";
import AuthPage from "../../pages/AuthPage/ui/AuthPage.tsx";
import CatalogPage from "../../pages/CatalogPage/ui/CatalogPage.tsx";

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