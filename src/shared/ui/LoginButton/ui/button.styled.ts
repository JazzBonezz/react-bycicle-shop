import styled from 'styled-components';

export const Button = styled.button<{ $width?: string; $hasIcon?: boolean }>`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.lightText};
    width: ${({ $width }) => $width || '100%'};
    height: 3rem;
    border: none;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.default};
    cursor: pointer;
    transition: 0.2s ease;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.darkGray};
        cursor: not-allowed;
        opacity: 0.6;
    }

    &:active {
        transform: translateY(2px);
    }

    & > svg {
        transition: ${({ $hasIcon }) =>
            $hasIcon ? 'transform 0.3s ease' : 'none'};
    }

    &:hover {
        opacity: 0.9;

        & > svg {
            transform: ${({ $hasIcon }) =>
                $hasIcon ? 'translateX(5px)' : 'none'};
        }
    }
`;
