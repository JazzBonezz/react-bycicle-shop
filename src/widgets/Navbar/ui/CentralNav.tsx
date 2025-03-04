import { CentralSection, NavLinkSecondary } from './styles';

const CentralNav = () => (
    <CentralSection>
        <NavLinkSecondary to={'/home'}>
            <span>Главная</span>
        </NavLinkSecondary>
        <NavLinkSecondary to={'/catalog'}>
            <span>Каталог</span>
        </NavLinkSecondary>
        <NavLinkSecondary to={'/about'}>
            <span>О нас</span>
        </NavLinkSecondary>
    </CentralSection>
);

export default CentralNav;
