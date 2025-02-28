import React, { useState } from 'react';
import {
    Container,
    MainTitle,
    LeftSection,
    RightSection,
    SecondaryTitle,
    CouponSection,
    Input,
} from './cart.styled';
import { Button } from '../../shared/ui/LoginButton/ui/button.styled';
import { useAppSelector, useAppDispatch } from '../../app/providers/store';
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from './Model/cartSlice';
import Modal from '../../shared/ui/modal/Modal';

const CartPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

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

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const totalWithDiscount = cartItems.reduce((sum, item) => {
        const discountPrice = item.price - item.price * (item.discount / 100);
        return sum + discountPrice * item.quantity;
    }, 0);

    return (
        <>
            <MainTitle>Корзина</MainTitle>
            <Container>
                <LeftSection>
                    <SecondaryTitle>Товары: </SecondaryTitle>
                    <ul>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <span>
                                            {item.name} -{' '}
                                            {item.price.toLocaleString('ru-RU')}{' '}
                                            ₽
                                        </span>
                                        <div>
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        decreaseQuantity(
                                                            item.id,
                                                        ),
                                                    )
                                                }
                                            >
                                                −
                                            </button>
                                            <span> {item.quantity} </span>
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        increaseQuantity(
                                                            item.id,
                                                        ),
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() =>
                                                handleOpenModal(item.id)
                                            }
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p>Корзина пуста</p>
                        )}
                    </ul>
                </LeftSection>

                <RightSection>
                    <SecondaryTitle>Сумма: </SecondaryTitle>
                    <div className="PriceSection">
                        <p>
                            Подытог (без скидки):{' '}
                            {subtotal.toLocaleString('ru-RU')} ₽
                        </p>
                        <hr />
                        <p>
                            Итог (со скидкой):{' '}
                            <strong>
                                {totalWithDiscount.toLocaleString('ru-RU')} ₽
                            </strong>
                        </p>
                    </div>
                    <Button>Перейти к оплате</Button>

                    <hr />
                    <CouponSection>
                        <Input
                            type="text"
                            placeholder="Код купона"
                            aria-label="Код купона"
                        />
                        <Button>Применить купон</Button>
                    </CouponSection>
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
