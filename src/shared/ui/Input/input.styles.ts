import styled from "styled-components";

export const Container = styled.div`
position: relative;
    margin-bottom: 26px;
    width: 100%;
    
    & label {
        display: block;
        padding: 0 0 6px 6px;
        font-size: ${({ theme }) => theme.fontSizes.default};
        color: ${({ theme }) => theme.colors.text};
    }
    
    & input {
        width: 100%;
        padding: 12px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.fontSizes.default};
        color: ${({ theme }) => theme.colors.text};
    }

    & span {
        display: block;
        position: absolute;
        top: 100%;
        padding-left: 16px;
        font-size: ${({ theme }) => theme.fontSizes.default};
        color: ${({ theme }) => theme.colors.textError};
    }
    
`

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