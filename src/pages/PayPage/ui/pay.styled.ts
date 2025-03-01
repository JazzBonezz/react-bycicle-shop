import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled(Form)`
    max-width: 1280px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    margin: 2rem auto;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 1fr;
    }
`;

export const FirstSection = styled.div`
    font-size: 18px;

    line-height: 1.8;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.sectionBackground};
    border-radius: ${(props) => props.theme.borderRadius.default};
    box-shadow: ${(props) => props.theme.shadow.default};
`;

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

export const Input = styled(Field)`
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.default};
    border: ${(props) => props.theme.colors.border};
    border-radius: 10px;

    &:focus {
        outline: none;
    }
`;

export const Delivery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
`;

export const PayPageButton = styled.button<{ $active?: boolean }>`
    cursor: pointer;
    border: none;
    border-radius: 10px;
    height: 4rem;
    background: ${({ $active }) => ($active ? '#6A5ACD' : '#ddd')};
    color: ${({ $active }) => ($active ? 'white' : 'black')};
    transition: background 0.3s ease;

    & img {
        width: 3rem;
    }

    &:hover {
        background: ${({ $active }) => ($active ? '#9368B7' : '#ccc')};
    }
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

export const ErrorText = styled.p`
    color: ${(props) => props.theme.colors.textError};
    padding: 0 20px;
`

