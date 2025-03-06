import { Burger, BurgerMenu, BurgerMenuContainer, NavLink } from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FC } from 'react';

interface BurgerMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const BurgerMenuComponent: FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => (
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
);

export default BurgerMenuComponent;
