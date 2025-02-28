import { createBrowserRouter, Navigate } from 'react-router';

import LoginForm from '../../features/auth/ui/LoginForm';
import RegisterForm from '../../features/auth/ui/RegisterForm';
import { MainPage } from '../../pages/MainPage';
import { AboutPage } from '../../pages/AboutPage';
import { HomePage } from '../../pages/HomePage';
import { CatalogPage } from '../../pages/CatalogPage';
import { AuthPage } from '../../pages/AuthPage';

import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../features/auth/model/authSlice';
import { FC } from 'react';
import CartPage from '../../features/cart/ui/CartPage';
import PayPage from '../../pages/PayPage/PayPage';

interface Props {
    children: React.ReactNode;
}

const ProtectedRoute: FC<Props> = ({ children }) => {
    const isAuthorized = useSelector(selectIsAuthenticated);
    return isAuthorized ? children : <Navigate to="/auth" replace />;
};

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                path: 'home',
                element: (
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/about',
                element: (
                    <ProtectedRoute>
                        <AboutPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/catalog',
                element: (
                    <ProtectedRoute>
                        <CatalogPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/cart',
                element: (
                    <ProtectedRoute>
                        <CartPage />
                    </ProtectedRoute>
                ),
            },

            {
                path: 'auth',
                element: <AuthPage />,
                children: [],
            },
            {
                path: 'registration',
                element: <RegisterForm />,
            },
            {
                path: 'login',
                element: <LoginForm />,
            },
            {
                path: 'pay',
                element: <PayPage />,
            },
        ],
    },
]);

export default routes;
