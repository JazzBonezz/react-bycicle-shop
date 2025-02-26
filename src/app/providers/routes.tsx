import {createBrowserRouter, Navigate} from "react-router";

import LoginForm from "../../features/auth/ui/LoginForm";
import RegisterForm from "../../features/auth/ui/RegisterForm";
import {MainPage} from "../../pages/MainPage";
import {AboutPage} from "../../pages/AboutPage";
import {HomePage} from "../../pages/HomePage";
import {CatalogPage} from "../../pages/CatalogPage";
import {AuthPage} from "../../pages/AuthPage";

import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "../../features/auth/model/authSlice";

const ProtectedRoute = ({children}: { children: JSX.Element }) => {
    const isAuthorized = useSelector(selectIsAuthenticated);
    return isAuthorized ? children : <Navigate to="/auth" replace/>;
};

const routes = createBrowserRouter([

    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "home",
                element: <ProtectedRoute><HomePage/></ProtectedRoute>,

            },
            {
                path: "/about",
                element: <ProtectedRoute><AboutPage/></ProtectedRoute>,
            },
            {
                path: "/catalog",
                element: <ProtectedRoute><CatalogPage/></ProtectedRoute>,
            },

            {
                path: "auth",
                element: <AuthPage/>,
                children: [],

            }, {
                path: "registration",
                element: <RegisterForm/>,
            },
            {
                path: "login",
                element: <LoginForm/>,
            },
        ],

    },


]);

export default routes;