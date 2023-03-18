
export type Product = {
    itemId: number;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    amount: number;
    itemOrder?: number;
}

export interface ProductContextState {
    products: Product[];
    cartNumber: number;
    search: string;
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productId: number) => void;
    removeAllProductsFromCart: () => void;
    itemsInCart: (n: number) => number;
    cartTotal: (products: Product[]) => number;
    updateAmount: (productId: number, n: number) => void;
    itemSearch: (e: string) => void;
}
