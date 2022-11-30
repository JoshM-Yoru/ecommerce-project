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
            amount: product.amount,
        };

        setProducts([...products, addedProduct]);

    };

    const removeProductFromCart = (productId: number) => {
        setProducts(products.filter((product: Product) => product.productId !== productId));
    };

    const itemsInCart = (products: Product[]): number => {
        return products.length;
    }

    const cartTotal = (products: Product[]): number => {
        let total: number = 0;

        for (let i: number = 0; i < products.length; i++) {
            total += products[i].price;
        }
        return total;
    }


    return (
        <Context.Provider value={{ products, addProductToCart, removeProductFromCart, itemsInCart, cartTotal }}>
            {children}
        </Context.Provider>
    )
}

export default ProductProvider
