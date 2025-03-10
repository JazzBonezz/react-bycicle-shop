import React from 'react';
import { useAppDispatch } from '../../../../app/providers/store';
import { CartItem as CartItemType } from '../../model/cartTypes';
import { increaseQuantity, decreaseQuantity } from '../../model/cartSlice';
import { formatPrice } from '../../../../shared/Helpers/formatPrice';
import { Item, ItemButtons, Quantity } from './styles';
import { Button } from '../../../../shared/components/CustomButton/ui/styles';

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
