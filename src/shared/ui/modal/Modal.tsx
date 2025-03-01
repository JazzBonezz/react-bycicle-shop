// Большую часть кода скопировал с видео UlbiTV про модальные окна
import React from 'react';
import { createPortal } from 'react-dom';
import {
    Overlay,
    ModalContainer,
    CloseButton,
    ButtonWrapper,
    Button,
} from './modal.styled';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
}) => {
    if (!isOpen) return null;

    return createPortal(
        <Overlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <h2>{title}</h2>
                <p>{message}</p>
                <ButtonWrapper>
                    <Button onClick={onClose} cancel>
                        Нет
                    </Button>
                    <Button onClick={onConfirm}>Да</Button>
                </ButtonWrapper>
            </ModalContainer>
        </Overlay>,
        document.body,
    );
};

export default Modal;
