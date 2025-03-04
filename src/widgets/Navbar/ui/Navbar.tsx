import { Header, NavLink } from './styles';
import { useState } from 'react';
import CentralNav from './CentralNav';
import RightNav from './RightNav';
import BurgerMenuComponent from './BurgerMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Header>
            <NavLink to={'/catalog'}>Mischief</NavLink>

            <nav>
                <CentralNav />
                <RightNav />
            </nav>

            <BurgerMenuComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        </Header>
    );
};

export default Navbar;
