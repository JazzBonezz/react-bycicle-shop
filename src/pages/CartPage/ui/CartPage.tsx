import React, { useState } from 'react';
import {
    Container,
    LeftSection,
    RightSection,
    SecondaryTitle,
    ItemList,
    TotalPrice,
    SubTotalPrice,
    PriceSection,
} from './cart.styled';
import { Button } from '../../../shared/ui/LoginButton/ui/button.styled';
import { useAppSelector, useAppDispatch } from '../../../app/providers/store';
import {
    selectCartItems,
    selectCartSubtotal,
    selectCartTotalWithDiscount,
} from '../../../features/cart/model/cartSelectors';
import { removeFromCart } from '../../../features/cart/model/cartSlice';
import CartItem from '../../../features/cart/ui/CartItem';
import Modal from '@/shared/ui/Modal/Modal';
import { formatPrice } from '../../../shared/lib/formatPrice';
import { useNavigate } from 'react-router';

const CartPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(selectCartItems);
    const subtotal = useAppSelector(selectCartSubtotal);
    const totalWithDiscount = useAppSelector(selectCartTotalWithDiscount);
    const navigate = useNavigate();

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
                    <SecondaryTitle>Корзина: </SecondaryTitle>
                    <ItemList>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onOpenModal={handleOpenModal}
                                />
                            ))
                        ) : (
                            <p>Корзина пуста</p>
                        )}
                    </ItemList>
                </LeftSection>

                <RightSection>
                    <SecondaryTitle>Сумма: </SecondaryTitle>
                    <PriceSection>
                        <SubTotalPrice>
                            Подытог (без скидки): {formatPrice(subtotal)}
                        </SubTotalPrice>
                        <hr />
                        <TotalPrice>
                            Итог (со скидкой):{' '}
                            <strong>{formatPrice(totalWithDiscount)}</strong>
                        </TotalPrice>
                    </PriceSection>
                    <Button onClick={() => navigate('/pay')}>
                        Перейти к оплате
                    </Button>
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
