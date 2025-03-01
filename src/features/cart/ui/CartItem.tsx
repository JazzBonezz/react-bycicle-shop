import React from 'react';
import { useAppDispatch } from '../../../app/providers/store';
import { CartItem as CartItemType } from '../model/cartTypes';
import { increaseQuantity, decreaseQuantity } from '../model/cartSlice';
import { formatPrice } from '../../../shared/lib/formatPrice';
import { Item, ItemButtons, Quantity } from './item.styled';
import { Button } from '../../../shared/ui/LoginButton/ui/button.styled';

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
                <Button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                >
                    −
                </Button>
                <Quantity>{item.quantity} </Quantity>
                <Button onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                </Button>
                <Button onClick={() => onOpenModal(item.id)}>Удалить</Button>
            </ItemButtons>
        </Item>
    );
};

export default CartItem;
