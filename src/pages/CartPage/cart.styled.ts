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
