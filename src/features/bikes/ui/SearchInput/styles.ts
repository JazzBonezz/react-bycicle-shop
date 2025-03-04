import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 5rem;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius.default};
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 50%;
    border: none;
    padding: 16px;
    font-size: ${({ theme }) => theme.fontSizes.default};
    border-radius: ${({ theme }) => theme.borderRadius.default};

    & :focus {
        border: none;
    }
`;
