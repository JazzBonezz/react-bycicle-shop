import styled from 'styled-components';

export const SecondaryTitle = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.large};
    margin: 1rem 0;
`;

export const ItemList = styled.ul`
    width: 100%;
    height: 80%;
    overflow-y: auto;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 0;
    font-size: ${(props) => props.theme.fontSizes.default};
    background-color: ${(props) => props.theme.colors.sectionBackground};
    color: ${(props) => props.theme.colors.text};
`;
