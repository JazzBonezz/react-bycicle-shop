import styled from 'styled-components';
import { Form } from 'formik';

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


