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
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Button } from '../../../shared/ui/LoginButton';
import { useNavigate } from 'react-router';
import { FaCartShopping } from "react-icons/fa6";
import { IoMoonOutline,IoMoon } from "react-icons/io5";
import { useAppDispatch } from '../../../app/providers/store';
import { toggleTheme } from '../../../shared/model/themeSlice';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Button showIcon={false}
                            onClick={() => {
                                navigate('/cart');
                            }}
                        >
                            Корзина{' '}
                            <FaCartShopping />
                        </Button>

                        <Button showIcon={false} onClick={() => dispatch(toggleTheme())}>
                            <IoMoonOutline /> <IoMoon />
                        </Button>
                    </div>

            </ListContainer>
            <>
                <Burger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
                </Burger>
                <BurgerMenu $isOpen={isOpen}>
                    <BurgerMenuContainer>
                        <NavLink onClick={() => setIsOpen(!isOpen)} to={'/'}>
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

                    </BurgerMenuContainer>
                </BurgerMenu>
            </>
        </Header>
    );
};

export default Navbar;
