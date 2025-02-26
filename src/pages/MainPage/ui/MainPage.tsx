import { Outlet } from 'react-router';
import Navbar from '../../../widgets/Navbar/ui/Navbar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsAuthenticated } from '../../../features/auth/model/authSlice';

const MainPage = () => {
    const isAuthorized = useSelector(selectIsAuthenticated);

    useEffect(() => {
        console.log('isAuthenticated:', isAuthorized);
    }, [isAuthorized]);

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainPage;
