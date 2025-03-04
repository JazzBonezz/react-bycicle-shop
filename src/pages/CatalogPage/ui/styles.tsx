import styled from 'styled-components';

export const Container = styled.div`
    max-width: 90dvw;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 1rem;
    position: relative;
`;

export const RightSection = styled.section`
    background: ${(props) => props.theme.colors.sectionBackground};
    border-radius: ${(props) => props.theme.borderRadius.default};
    box-shadow: ${(props) => props.theme.shadow.default};
    line-height: 1.8;
`;

export const LeftSection = styled.div`
    position: sticky;
    top: 0;
    align-self: start;
    border-radius: ${(props) => props.theme.borderRadius.default};
`;
