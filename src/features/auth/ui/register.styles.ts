import styled from "styled-components";
import {Form} from "formik";


const StyledForm = styled(Form)`
    max-width: 600px;
    margin: 0 auto;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
        margin-bottom: 20px;
    }
    
    & button {
        background-color: ${({ theme }) => theme.colors.primary};
        width: 100%;
        height: 3rem;
        margin-bottom: 26px;
        border: none;
        color: ${({ theme }) => theme.colors.lightText};
        font-size: ${({ theme }) => theme.fontSizes.default};
        cursor: pointer;
        transition: 0.2s ease;
        
        &:disabled {
            background-color: ${({ theme }) => theme.colors.secondary};
        }
        
        &:active {
            transform: translateY(2px);
        }
    }
`;

export const EyeIcon = styled.button`
    position: absolute;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;


export default StyledForm;