import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState } from './cartTypes';

const initialState: CartState = {
    items: [],
};

const updateQuantity = (state: CartState, itemId: string, change: number) => {
    const item = state.items.find((item) => item.id === itemId);
    if (item && (change > 0 || item.quantity > 1)) {
        item.quantity += change;
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<Omit<CartItem, 'quantity'>>,
        ) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id,
            );
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
        },
        clearCart: (state) => {
            state.items = [];
        },
        increaseQuantity: (state, action: PayloadAction<string>) => {
            updateQuantity(state, action.payload, 1);
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            updateQuantity(state, action.payload, -1);
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
