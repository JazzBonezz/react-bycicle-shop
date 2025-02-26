import styled from 'styled-components';

const MainTitle = styled.h1`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px auto;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes.large};
`;

const ProductCard = styled.li`
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
const PriceCard = styled.p`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: ${(props) => props.theme.fontSizes.price};
    color: ${(props) => props.theme.colors.lightText};
    border-radius: ${(props) => props.theme.borderRadius.default};
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px;
`;

const CardButton = styled.button`
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
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius.default};
    justify-content: space-between;
    padding: 1rem;
    height: 18rem;
`;

const CenterlSection = styled.div`
    padding: 1rem;
`;

const RightSection = styled.div``;

const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    object-position: center;
    border-radius: ${(props) => props.theme.borderRadius.default};
`;
const Title = styled.h2`
    color: ${(props) => props.theme.colors.lightText};
`;

const Description = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.default};
`;

export {
    MainTitle,
    Title,
    ProductCard,
    CardButton,
    LeftSection,
    CenterlSection,
    Description,
    Image,
    RightSection,
    PriceCard,
};
