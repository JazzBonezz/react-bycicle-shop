import { createBrowserRouter } from 'react-router';
import { MainPage } from '../../pages/MainPage';
import { AboutPage } from '../../pages/AboutPage';
import { HomePage } from '../../pages/HomePage';
import { CatalogPage } from '../../pages/CatalogPage';

import CartPage from '../../features/cart/ui/CartPage';
import PayPage from '../../pages/PayPage/ui/PayPage';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/catalog',
                element: <CatalogPage />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
            {
                path: 'pay',
                element: <PayPage />,
            },
        ],
    },
]);

export default routes;
