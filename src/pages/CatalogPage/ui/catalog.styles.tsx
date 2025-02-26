import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90dvw;
    height: fit-content;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    position: relative;
`;

export const LeftSection = styled.div`
    position: sticky;
    top: 0;
    align-self: start;
    border-radius: ${(props) => props.theme.borderRadius.default};
`;

export const RightSection = styled.section`
    height: 100%;
    
`;

export const FilterSection = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    
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

export const FilterList = styled.ul`
    display: flex;
    margin: 1rem;
    flex-direction: column;
    list-style: none;
    gap: 10px;
    text-align: left; 
    overflow: auto;
    max-height: 300px;
`

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;

    &:checked {
        background-color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &:checked::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;

export const FilterItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
`

export const FilterTitle = styled.h2`
    padding: 20px;
    background: ${(props) => props.theme.colors.primary};
    color: ${({ theme }) => theme.colors.lightText};
`