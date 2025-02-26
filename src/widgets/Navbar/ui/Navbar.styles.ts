import styled from "styled-components";
import { Link } from "react-router";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem;
    font-size: ${(props) => props.theme.fontSizes.large};
    position: relative;
`;

const NavLink = styled(Link)`
    color: ${(props) => props.theme.colors.lightText};
    text-decoration: none;
`;

const NavLinkSecondary = styled(Link)`
    color: ${(props) => props.theme.colors.lightText};
    text-decoration: none;
    position: relative;
    display: inline-block;
    font-size: 1.8rem;
    padding: 10px 15px;

    &::before,
    &::after,
    & span::before,
    & span::after {
        content: "";
        position: absolute;
        background: white;
        transition: all 0.3s ease-in-out;
    }

    &::before {
        width: 100%;
        height: 2px;
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
    }

    &::after {
        width: 2px;
        height: 100%;
        top: 0;
        right: 0;
        transform: scaleY(0);
        transform-origin: top;
    }

    & span::before {
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: right;
    }

    & span::after {
        width: 2px;
        height: 100%;
        bottom: 0;
        left: 0;
        transform: scaleY(0);
        transform-origin: bottom;
    }

    &:hover::before,
    &:hover span::before {
        transform: scaleX(1);
    }

    &:hover::after,
    &:hover span::after {
        transform: scaleY(1);
    }

    &:active {
        background: ${(props) => props.theme.colors.lightText};
        color: ${(props) => props.theme.colors.primary};
    }
`;

const CenterlSection = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: none;
    }
`;



const Burger = styled.div<{ $isOpen: boolean }>`
    width: 50px;
    height: 30px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 1000;

    & svg {
        color: ${(props) => props.theme.colors.lightText};
    }
    
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: flex;
    }
`;

const BurgerMenu = styled.nav<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80vw;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: ${(props) => props.theme.fontSizes.large};
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    z-index: 100;
    box-shadow: 10px 0px 100px 10px ${(props) => props.theme.colors.text};
`;

const BurgerMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 40%;
    margin: 40px auto;
    align-items: start;
`;

const ListContainer = styled.ul``

export { Header, NavLink, CenterlSection, NavLinkSecondary, Burger, BurgerMenu, BurgerMenuContainer, ListContainer};
