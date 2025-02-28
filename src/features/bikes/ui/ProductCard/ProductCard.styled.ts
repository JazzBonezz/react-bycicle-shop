import styled from 'styled-components';

export const ProductCard = styled.li`
    height: 20rem;
    padding: 1rem;
    margin: 10px 0;
    background-color: ${(props) => props.theme.colors.background};
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-bottom: 1px solid ${(props) => props.theme.colors.text};

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr;
        height: fit-content;
    }
`;

export const PriceCard = styled.p`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: ${(props) => props.theme.fontSizes.price};
    color: ${(props) => props.theme.colors.lightText};
    border-radius: ${(props) => props.theme.borderRadius.default};
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const CardButton = styled.button`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    border: none;
    height: 4rem;
    width: 9rem;
    font-size: ${(props) => props.theme.fontSizes.default};
    color: ${(props) => props.theme.colors.lightText};
    border-radius: ${(props) => props.theme.borderRadius.default};
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius.default};
    justify-content: space-between;
    padding: 1rem;
    height: 18rem;
`;

export const CenterlSection = styled.div`
    padding: 1rem;
`;

export const RightSection = styled.div``;

export const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    object-position: center;
    border-radius: ${(props) => props.theme.borderRadius.default};
`;

export const Title = styled.h2`
    color: ${(props) => props.theme.colors.lightText};
`;

export const Description = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.default};
`;
