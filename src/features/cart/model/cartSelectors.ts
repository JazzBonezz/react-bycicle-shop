import { AppState } from '../../../app/providers/store';

export const selectCartItems = (state: AppState) => state.cart.items;

export const selectCartSubtotal = (state: AppState) =>
    state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const selectCartTotalWithDiscount = (state: AppState) =>
    state.cart.items.reduce((sum, item) => {
        const discountPrice = item.price - item.price * (item.discount / 100);
        return sum + discountPrice * item.quantity;
    }, 0);
