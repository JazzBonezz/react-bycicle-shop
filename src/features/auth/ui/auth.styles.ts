import styled from "styled-components";
import {Form} from "formik";


const StyledForm = styled(Form)`
    
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
    
    padding: 50px;
    
    border-radius: ${({ theme }) => theme.borderRadius.default};
    box-shadow: ${({ theme }) => theme.shadows.default};
    
    max-width: 1200px;
    
    
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & h1 {
        font-size: ${({ theme }) => theme.fontSizes.large};
        margin-bottom: 20px;
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