import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%) translateY(-50%);
    max-height: 1200px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.title};
    @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
        font-size: ${({ theme }) => theme.fontSizes.titleTablet};
    }
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;
