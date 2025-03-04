import styled from 'styled-components';

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

