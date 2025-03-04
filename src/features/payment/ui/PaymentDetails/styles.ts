import styled from 'styled-components';

export const SecondSection = styled.div`
    font-size: 18px;
    color: #444;
    line-height: 1.8;
    background: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    box-shadow: ${(props) => props.theme.shadow.default};
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const TotalPrice = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
    width: fit-content;
    margin-left: 1rem;

    strong {
        font-weight: 700;
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const Line = styled.hr`
    width: 90%;
    margin: 0 auto;
`;
