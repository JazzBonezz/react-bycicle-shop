import styled from "styled-components";
import {Link} from "react-router";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 5rem;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1rem;
    font-size: ${(props) => props.theme.fontSizes.large};
    position: relative;
`

const NavLink = styled(Link)`
    color: ${(props) => props.theme.colors.lightText};
    text-decoration: none;
`

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

    &:hover::before {
        transform: scaleX(1);
    }

    &:hover::after {
        transform: scaleY(1);
    }

    &:hover span::before {
        transform: scaleX(1);
    }

    &:hover span::after {
        transform: scaleY(1);
    }

    &:active {
        background: ${(props) => props.theme.colors.lightText};
        color: ${(props) => props.theme.colors.primary};
    }
`

const List = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
`

const Burger = styled.div<{ isOpen: boolean }>`
    width: 50px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: 1000;
    //
    // div {
    //     width: 100%;
    //     height: 5px;
    //     border-radius: 2px;
    //     background-color: ${(props) => props.theme.colors.lightText};
    //     transition: all 0.3s ease;
    //
    //
    //     &:nth-child(1) {
    //         transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "translateY(-10px)")};
    //     }
    //     &:nth-child(2) {
    //         opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    //     }
    //     &:nth-child(3) {
    //         transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "translateY(10px)")};
    //     }
    // }
    
`;

const BurgerMenu = styled.nav<{ isOpen: boolean }>`
    
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
    text-align: start;
    gap: 2rem;
    font-size: ${(props) => props.theme.fontSizes.large};

    transition: transform 0.3s ease, opacity 0.3s ease;

    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};

    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

    z-index: 100;
    
    -webkit-box-shadow: 10px 0px 100px 10px ${(props) => props.theme.colors.text};
    -moz-box-shadow: 10px 0px 100px 10px ${(props) => props.theme.colors.text};
    box-shadow: 10px 0px 100px 10px ${(props) => props.theme.colors.te18};
`;

const BurgerMenuContainer = styled.div<{ isOpen: boolean }>`
    
    display: flex;
    right: 0;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 40%;
    margin: 40px auto;
    align-items: start;
    
    
`


export {Header, NavLink, List, NavLinkSecondary, Burger, BurgerMenu, BurgerMenuContainer};