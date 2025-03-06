import { useAppSelector } from '../../../../app/providers/store';
import {
    selectCartItems,
    selectCartSubtotal,
    selectCartTotalWithDiscount,
} from '../../../../features/cart/model/cartSelectors';

export const useCartSelectors = () => {
    return {
        cartItems: useAppSelector(selectCartItems),
        subtotal: useAppSelector(selectCartSubtotal),
        totalWithDiscount: useAppSelector(selectCartTotalWithDiscount),
    };
};
