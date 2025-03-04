import React, { useState } from 'react';
import { Container, LeftSection, RightSection } from './styles';
import { useAppSelector, useAppDispatch } from '../../../app/providers/store';
import {
    selectCartItems,
    selectCartSubtotal,
    selectCartTotalWithDiscount,
} from '../../../features/cart/model/cartSelectors';
import { removeFromCart } from '../../../features/cart/model/cartSlice';
import Modal from '../../../shared/ui/Modal/Modal';
import CartList from '../../../features/cart/ui/CartList/CartList';
import CartSummary from '../../../features/cart/ui/CartSummary/CartSummary';

const CartPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCartItems);
    const subtotal = useAppSelector(selectCartSubtotal);
    const totalWithDiscount = useAppSelector(selectCartTotalWithDiscount);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToRemove, setItemToRemove] = useState<string | null>(null);

    const handleOpenModal = (id: string) => {
        setItemToRemove(id);
        setIsModalOpen(true);
    };

    const handleConfirmRemove = () => {
        if (itemToRemove) {
            dispatch(removeFromCart(itemToRemove));
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <Container>
                <LeftSection>
                    <CartList cartItems={cartItems} onOpenModal={handleOpenModal} />
                </LeftSection>

                <RightSection>
                    <CartSummary subtotal={subtotal} totalWithDiscount={totalWithDiscount} />
                </RightSection>
            </Container>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmRemove}
                title="Удаление товара"
                message="Вы точно хотите убрать товар из корзины?"
            />
        </>
    );
};

export default CartPage;
