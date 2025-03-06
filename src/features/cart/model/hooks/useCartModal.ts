import { useState } from 'react';
import { useAppDispatch } from '../../../../app/providers/store';
import { removeFromCart } from '../cartSlice';

export const useCartModal = () => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToRemove, setItemToRemove] = useState<string | null>(null);

    const openModal = (id: string) => {
        setItemToRemove(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmRemove = () => {
        if (itemToRemove) {
            dispatch(removeFromCart(itemToRemove));
        }
        closeModal();
    };

    return { isModalOpen, openModal, closeModal, confirmRemove };
};
