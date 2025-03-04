import { createBrowserRouter } from 'react-router';
import { MainPage } from '../../pages/MainPage';
import { AboutPage } from '../../pages/AboutPage';
import { HomePage } from '../../pages/HomePage';
import { CatalogPage } from '../../pages/CatalogPage';
import { ROUTES } from '../constants/routes-constants'
import CartPage from '../../pages/CartPage/';
import PayPage from '../../pages/PayPage';

const routes = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainPage />,
        children: [
            {
                path: ROUTES.HOME_PAGE,
                element: <HomePage />,
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />,
            },
            {
                path: ROUTES.CATALOG,
                element: <CatalogPage />,
            },
            {
                path: ROUTES.CART,
                element: <CartPage />,
            },
            {
                path: ROUTES.PAYMENT,
                element: <PayPage />,
            },
        ],
    },
]);

export default routes;
