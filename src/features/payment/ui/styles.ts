import styled from 'styled-components';
import { Field } from 'formik';

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

export const ErrorText = styled.p`
    color: ${(props) => props.theme.colors.textError};
    padding: 0 20px;
`;
