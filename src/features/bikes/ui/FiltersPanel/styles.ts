import styled from 'styled-components';

export const FilterSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;

    background: ${(props) => props.theme.colors.sectionBackground};
    border-radius: ${(props) => props.theme.borderRadius.default};
    box-shadow: ${(props) => props.theme.shadow.default};
`;

export const FilterTitle = styled.h2`
    padding: 20px;
    background: ${(props) => props.theme.colors.primary};
    color: ${({ theme }) => theme.colors.lightText};
    border-radius: ${(props) => props.theme.borderRadius.default};
`;

export const FilterButton = styled.button`
    padding: 10px;
    margin: 0.5rem;
    background: ${(props) => props.theme.colors.secondary};
    color: ${({ theme }) => theme.colors.lightText};
    font-size: ${({ theme }) => theme.fontSizes.default};
    border-radius: ${(props) => props.theme.borderRadius.default};
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.95;
    }
`;

export const FilterList = styled.ul<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 10px;
    text-align: left;
    overflow-y: auto;

    max-height: ${({ $isOpen }) => ($isOpen ? '300px' : '0')};
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transform: ${({ $isOpen }) =>
        $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    padding: ${({ $isOpen }) => ($isOpen ? '1rem' : '0')};
    transition: all 0.3s ease-in-out;
`;

export const FilterItem = styled.li`
    display: flex;
    align-items: start;
    justify-content: start;
    padding: 10px;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
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
`;
