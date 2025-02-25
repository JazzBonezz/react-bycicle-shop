import {Header, NavLink, NavLinkSecondary, List, Burger, BurgerMenu, BurgerMenuContainer} from "./Navbar.styles.ts";
import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(true);

    return (
        <Header>
            <NavLink to={'/'}>Mischief</NavLink>
            {isAuthorized ? <>
                <List>
                    <NavLinkSecondary to={'/home'}><span>Главная</span></NavLinkSecondary>
                    <NavLinkSecondary to={'/catalog'}><span>Каталог</span></NavLinkSecondary>
                    <NavLinkSecondary to={'/about'}><span>О нас</span></NavLinkSecondary>
                </List>
                <NavLink to={'/auth'}>Авторизация</NavLink>
            </> : <>
                <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <BurgerMenu isOpen={isOpen}>

                        <BurgerMenuContainer isOpen={isOpen}>
                            <NavLink to={'/'}>Mischief</NavLink>
                            <NavLink to={'/home'}><span>Главная</span></NavLink>
                            <NavLink to={'/catalog'}><span>Каталог</span></NavLink>
                            <NavLink to={'/about'}><span>О нас</span></NavLink>
                            <NavLink to={'/auth'}>Авторизация</NavLink>
                        </BurgerMenuContainer>
                    </BurgerMenu>
                </Burger>
            </>
            }


        </Header>
    );
};

export default Navbar;