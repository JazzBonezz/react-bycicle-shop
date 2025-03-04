import styled from 'styled-components';

export const SecondaryTitle = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.large};
    margin: 1rem 0;
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
