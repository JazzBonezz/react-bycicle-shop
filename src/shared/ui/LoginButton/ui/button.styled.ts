import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.lightText};
    width: 100%;
    height: 3rem;
    border: none;
    
    font-size: ${({ theme }) => theme.fontSizes.default};
    cursor: pointer;
    transition: 0.2s ease;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    &:active {
        transform: translateY(2px);
    }
    
    & > svg {
        transition: transform 0.3s ease;
    }

    &:hover {
        opacity: 0.9;
        
        & > svg {
            transform: translateX(5px);
        }
    }
    
}
`;
