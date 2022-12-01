
export type Product = {
    productId: number;
    img: string;
    title: string;
    desc: string;
    price: number;
    amount: number;
    itemOrder?: number;
}

export interface ProductContextState {
    products: Product[];
    cartNumber: number;
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productId: number) => void;
    itemsInCart: (n: number) => number;
    cartTotal: (products: Product[]) => number;
    updateAmount: (productId: number, n: number) => void;
}
