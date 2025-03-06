import { SecondaryTitle, ItemList } from './styles';
import CartItem from '../CartItem/CartItem';
import { CartItem as CartItemType } from '../../model/cartTypes';

interface CartListProps {
    cartItems: CartItemType[];
    onOpenModal: (id: string) => void;
}

const CartList: React.FC<CartListProps> = ({ cartItems, onOpenModal }) => (
    <>
        <SecondaryTitle>Корзина: </SecondaryTitle>
        <ItemList>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onOpenModal={onOpenModal}
                    />
                ))
            ) : (
                <p>Корзина пуста</p>
            )}
        </ItemList>
    </>
);

export default CartList;
