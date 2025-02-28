export interface CartItem {
    id: string;
    name: string;
    price: number;
    discount: number;
    priceWithDiscount: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}
