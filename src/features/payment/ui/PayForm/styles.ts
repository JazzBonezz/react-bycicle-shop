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

export const ErrorText = styled.p`
    color: ${(props) => props.theme.colors.textError};
    padding: 0 20px;
`;
