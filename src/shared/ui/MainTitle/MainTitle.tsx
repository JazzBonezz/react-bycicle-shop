import React from 'react';
import styled from 'styled-components';

const StyledMainTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem;
    color: #333;
    text-align: center;
`;

interface MainTitleProps {
    children: React.ReactNode;
}

export const MainTitle: React.FC<MainTitleProps> = ({ children }) => {
    return <StyledMainTitle>{children}</StyledMainTitle>;
};
