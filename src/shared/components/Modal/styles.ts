import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    min-width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    text-align: center;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    border: none;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const Button = styled.button<{ cancel?: boolean }>`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    background: ${({ cancel }) => (cancel ? '#ccc' : '#d9534f')};
    color: ${({ cancel }) => (cancel ? '#000' : '#fff')};
    transition: 0.3s;

    &:hover {
        background: ${({ cancel }) => (cancel ? '#b3b3b3' : '#c9302c')};
    }
`;
