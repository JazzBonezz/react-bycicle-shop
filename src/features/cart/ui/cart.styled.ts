import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90dvw;
    height: fit-content;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
    }
`;

export const MainTitle = styled.h1`
    width: 100%;
    height: 10px;
    text-align: center;
`;

export const RightSection = styled.aside`
    background-color: ${(props) => props.theme.colors.secondary};
    height: 50vh;
    border-radius: ${(props) => props.theme.borderRadius.default};
    color: ${(props) => props.theme.colors.lightText};
    order: 2;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const LeftSection = styled.section`
    height: 50vh;
    order: 1;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.lightText};
    padding: 1rem;

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
`;

export const SecondaryTitle = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.large};
`;

export const CouponSection = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    border: none;
    padding: 0 1rem;
    font-size: 1rem;
    &:focus {
        outline: none;
        border: none;
    }
`;

export const ItemList = styled.ul`
    width: 100%;
    height: 50vh;
    overflow-y: auto;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 0;
`;
