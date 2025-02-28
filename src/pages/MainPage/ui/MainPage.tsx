import { Outlet } from 'react-router';
import Navbar from '../../../widgets/Navbar/ui/Navbar';

const MainPage = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainPage;
