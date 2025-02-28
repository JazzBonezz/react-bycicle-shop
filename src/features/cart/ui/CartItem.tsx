import React from 'react';
import { useAppDispatch } from '../../../app/providers/store';
import { CartItem as CartItemType } from '../model/cartTypes';
import { increaseQuantity, decreaseQuantity } from '../model/cartSlice';
import { formatPrice } from '../lib/formatPrice';
import { Item, ItemButtons } from './item.styled';

interface Props {
    item: CartItemType;
    onOpenModal: (id: string) => void;
}

const CartItem: React.FC<Props> = ({ item, onOpenModal }) => {
    const dispatch = useAppDispatch();

    return (
        <Item>
            <span>
                {item.name} - {formatPrice(item.price)}
            </span>
            <ItemButtons>
                <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                >
                    −
                </button>
                <span> {item.quantity} </span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                </button>
                <button onClick={() => onOpenModal(item.id)}>Удалить</button>
            </ItemButtons>
        </Item>
    );
};

export default CartItem;
