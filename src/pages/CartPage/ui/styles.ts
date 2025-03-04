import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    height: fit-content;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }
`;

export const RightSection = styled.aside`
    height: fit-content;
    background-color: ${(props) => props.theme.colors.sectionBackground};
    border-radius: ${(props) => props.theme.borderRadius.default};
    color: ${(props) => props.theme.colors.text};
    box-shadow: ${(props) => props.theme.shadow.default};
    order: 2;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const LeftSection = styled.section`
    height: 50vh;
    order: 1;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius.default};
    color: ${(props) => props.theme.colors.lightText};
    box-shadow: ${(props) => props.theme.shadow.default};
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
`;

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

export const PriceSection = styled.div``;

export const SubTotalPrice = styled.p`
    font-size: ${(props) => props.theme.fontSizes.default};
    margin: 1rem auto;
`;

export const TotalPrice = styled.p`
    font-size: ${(props) => props.theme.fontSizes.default};
    margin: 1rem auto;
`;
