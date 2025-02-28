import React, { useState } from 'react';
import {
    Container,
    MainTitle,
    LeftSection,
    RightSection,
    SecondaryTitle,
    ItemList,
} from './cart.styled';
import { Button } from '../../../shared/ui/LoginButton/ui/button.styled';
import { useAppSelector, useAppDispatch } from '../../../app/providers/store';
import {
    selectCartItems,
    selectCartSubtotal,
    selectCartTotalWithDiscount,
} from '../model/cartSelectors';
import { removeFromCart } from '../model/cartSlice';
import CartItem from './CartItem';
import Modal from '../../../shared/ui/modal/Modal';
import { formatPrice } from '../lib/formatPrice';
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
            dispatch(removeFromCart(itemToRemove)); // ✅ Теперь dispatch объявлен
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <MainTitle>Корзина</MainTitle>
            <Container>
                <LeftSection>
                    <SecondaryTitle>Товары: </SecondaryTitle>
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
                    <div className="PriceSection">
                        <p>Подытог (без скидки): {formatPrice(subtotal)}</p>
                        <hr />
                        <p>
                            Итог (со скидкой):{' '}
                            <strong>{formatPrice(totalWithDiscount)}</strong>
                        </p>
                    </div>
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
