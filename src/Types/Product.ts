
export type Product = {
    productId: number;
    img: string;
    title: string;
    desc: string;
    price: number;
}

export interface ProductContextState {
    products: Product[];
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productId: number) => void;
    itemsInCart: (products: Product[]) => number;
}
