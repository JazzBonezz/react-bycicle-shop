import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90dvw;
    height: 400dvh;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    position: relative;
`;

export const LeftSection = styled.div`
    background: lightgreen;
    height: 10vh;
    position: sticky;
    top: 0;
    align-self: start;
`;

export const RightSection = styled.section`
    height: 100%;
`;

export const FilterSection = styled.div`
    background: lightpink;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: ${(props) => props.theme.colors.primary};
    padding: 25px 0;
    border-radius: ${(props) => props.theme.borderRadius.default};
`;

export const SearchInput = styled.input`
    width: 70%;
    height: 50%;
    border: none;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSizes.default};
    border-radius: ${({ theme }) => theme.borderRadius.default};

    & :focus {
        border: none;
    }
`;

export const SearchButton = styled.button`
    height: 40px;
    width: 10%;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    border: none;
    cursor: pointer;
`;
