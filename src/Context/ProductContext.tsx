import React, { useState } from 'react'
import { Product, ProductContextState } from '../Types/Product';

interface ProviderProps {
    children: React.ReactNode;
}

export const Context = React.createContext<ProductContextState | null>(null);

const ProductProvider: React.FC<ProviderProps> = ({ children }) => {

    const [products, setProducts] = useState<Product[]>([]);

    const addProductToCart = (product: Product) => {
        const addedProduct: Product = {
            productId: product.productId,
            img: product.img,
            title: product.title,
            desc: product.desc,
            price: product.price,
        };

        setProducts([...products, addedProduct]);

    };

    const removeProductFromCart = (productId: number) => {
        setProducts(products.filter((product: Product) => product.productId !== productId));
    };

    const itemsInCart = (products: Product[]): number => {
        return products.length;
    }

    return (
        <Context.Provider value={{ products, addProductToCart, removeProductFromCart, itemsInCart }}>
            {children}
        </Context.Provider>
    )
}

export default ProductProvider
