import React, { useState } from 'react'
import { Product, ProductContextState } from '../Types/Product';

interface ProviderProps {
    children: React.ReactNode;
}

export const Context = React.createContext<ProductContextState | null>(null);

const ProductProvider: React.FC<ProviderProps> = ({ children }) => {

    const [products, setProducts] = useState<Product[]>([]);

    const [cartNumber, setCartNumber] = useState<number>(0)

    const [search, setSearch] = useState<string>('');

    const addProductToCart = (product: Product) => {
        const addedProduct: Product = {
            itemId: product.itemId,
            imageUrl: product.imageUrl,
            name: product.name,
            description: product.description,
            price: product.price,
            amount: product.amount,
        };

        let addProduct: boolean = true;
        for (let i: number = 0; i < products.length; i++) {
            if (products[i].itemId === addedProduct.itemId) {
                products[i].amount++;
                addProduct = false;
            }

        }
        if (addProduct) {
            setProducts([...products, addedProduct]);
        }

    };

    const removeProductFromCart = (productId: number) => {
        setProducts(products.filter((product: Product) => product.itemId !== productId));
    };

    const removeAllProductsFromCart = () => {
        setProducts([]);
    }

    const itemsInCart = (n: number): number => {
        setCartNumber(cartNumber + n);

        return cartNumber;
    }

    const updateAmount = (productId: number, n: number) => {
        for (let i: number = 0; i < products.length; i++) {
            if (productId === products[i].itemId)
                products[i].amount = products[i].amount + n;
        }
    }

    const cartTotal = (products: Product[]): number => {
        let total: number = 0;

        for (let i: number = 0; i < products.length; i++) {
            total += products[i].price * products[i].amount;
        }
        return total;
    }

    const itemSearch = (e: string) => {
        if (e) {
            setSearch(e);
        }
    }


    return (
        <Context.Provider value={{ products, addProductToCart, removeProductFromCart, itemsInCart, cartTotal, cartNumber, updateAmount, itemSearch, search, removeAllProductsFromCart }}>
            {children}
        </Context.Provider>
    )
}

export default ProductProvider
