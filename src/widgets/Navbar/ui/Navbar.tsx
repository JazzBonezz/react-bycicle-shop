import {
    Header,
    NavLink,
    NavLinkSecondary,
    Burger,
    BurgerMenu,
    BurgerMenuContainer,
    ListContainer,
    CenterlSection,
} from './Navbar.styles';
import { ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    logout,
    selectIsAuthenticated,
    userEmail,
} from '../../../features/auth/model/authSlice';
import { FaUser } from 'react-icons/fa6';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Button } from '../../../shared/ui/LoginButton';

function RightSection(props: { children: ReactNode }) {
    return null;
}

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthorized = useSelector(selectIsAuthenticated);
    const email = useSelector(userEmail);
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => dispatch(logout());

    return (
        <Header>
            <NavLink to={'/'}>Mischief</NavLink>

            <ListContainer>
                <CenterlSection>
                    <NavLinkSecondary to={'/home'}>
                        <span>Главная</span>
                    </NavLinkSecondary>
                    <NavLinkSecondary to={'/catalog'}>
                        <span>Каталог</span>
                    </NavLinkSecondary>
                    <NavLinkSecondary to={'/about'}>
                        <span>О нас</span>
                    </NavLinkSecondary>
                </CenterlSection>
                {!isAuthorized ? (
                    <NavLink to={'/auth'}>
                        <FaUser />
                    </NavLink>
                ) : (
                    <Button onClick={handleLogout}>Выйти</Button>
                )}
            </ListContainer>
            <>
                <Burger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    <Burger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
                    </Burger>
                </Burger>
                <BurgerMenu $isOpen={isOpen}>
                    <BurgerMenuContainer>
                        <NavLink onClick={() => setIsOpen(!isOpen)} to={'/'}>
                            {email ? email : 'Гость'}
                        </NavLink>
                        <NavLink
                            onClick={() => setIsOpen(!isOpen)}
                            to={'/home'}
                        >
                            <span>Главная</span>
                        </NavLink>
                        <NavLink
                            onClick={() => setIsOpen(!isOpen)}
                            to={'/catalog'}
                        >
                            <span>Каталог</span>
                        </NavLink>
                        <NavLink
                            onClick={() => setIsOpen(!isOpen)}
                            to={'/about'}
                        >
                            <span>О нас</span>
                        </NavLink>
                        {!isAuthorized ? (
                            <NavLink to={'/auth'}>
                                <FaUser />
                            </NavLink>
                        ) : (
                            <Button onClick={handleLogout}>Выйти</Button>
                        )}
                    </BurgerMenuContainer>
                </BurgerMenu>
            </>
        </Header>
    );
};

export default Navbar;
