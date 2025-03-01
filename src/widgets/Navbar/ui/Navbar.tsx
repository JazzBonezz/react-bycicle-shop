import {
    Header,
    NavLink,
    NavLinkSecondary,
    Burger,
    BurgerMenu,
    BurgerMenuContainer,
    ListContainer,
    CentralSection,
    RightSection
} from './Navbar.styles';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Button } from '../../../shared/ui/LoginButton';
import { useNavigate } from 'react-router';
import { FaCartShopping } from 'react-icons/fa6';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store';
import { toggleTheme } from '../../../shared/model/themeSlice';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const themeToggle = useAppSelector((state) => state.theme.isDark);

    return (
        <Header>
            <NavLink to={'/catalog'}>Mischief</NavLink>

            <nav>
                <ListContainer>
                    <CentralSection>
                        <NavLinkSecondary to={'/home'}><span>Главная</span></NavLinkSecondary>
                        <NavLinkSecondary to={'/catalog'}><span>Каталог</span></NavLinkSecondary>
                        <NavLinkSecondary to={'/about'}><span>О нас</span></NavLinkSecondary>
                    </CentralSection>

                    <RightSection>
                        <Button showIcon={false} onClick={() => navigate('/cart')}>
                            Корзина <FaCartShopping />
                        </Button>

                        <Button showIcon={false} onClick={() => dispatch(toggleTheme())}>
                            {themeToggle ? <IoMoon /> : <IoMoonOutline />}
                        </Button>
                    </RightSection>
                </ListContainer>
            </nav>

            <>
                <Burger
                    aria-label="Открыть/закрыть меню"
                    $isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
                </Burger>

                <BurgerMenu $isOpen={isOpen}>
                    <BurgerMenuContainer>
                        <NavLink onClick={() => setIsOpen(false)} to={'/home'}>
                            Главная
                        </NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to={'/catalog'}>
                            Каталог
                        </NavLink>
                        <NavLink onClick={() => setIsOpen(false)} to={'/about'}>
                            О нас
                        </NavLink>
                    </BurgerMenuContainer>
                </BurgerMenu>
            </>
        </Header>
    );
};

export default Navbar;
