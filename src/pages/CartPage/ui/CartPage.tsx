import React from 'react';
import { Container, LeftSection, RightSection } from './styles';
import CartList from '../../../features/cart/ui/CartList/CartList';
import CartSummary from '../../../features/cart/ui/CartSummary/CartSummary';
import Modal from '../../../shared/components/Modal/Modal';
import { useCartSelectors } from '../../../features/cart/model/hooks/useCartSelectors';
import { useCartModal } from '../../../features/cart/model/hooks/useCartModal';

const CartPage = () => {
    const { cartItems, subtotal, totalWithDiscount } = useCartSelectors();
    const { isModalOpen, openModal, closeModal, confirmRemove } =
        useCartModal();

    return (
        <>
            <Container>
                <LeftSection>
                    <CartList cartItems={cartItems} onOpenModal={openModal} />
                </LeftSection>

                <RightSection>
                    <CartSummary
                        subtotal={subtotal}
                        totalWithDiscount={totalWithDiscount}
                    />
                </RightSection>
            </Container>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmRemove}
                title="Удаление товара"
                message="Вы точно хотите убрать товар из корзины?"
            />
        </>
    );
};

export default CartPage;
