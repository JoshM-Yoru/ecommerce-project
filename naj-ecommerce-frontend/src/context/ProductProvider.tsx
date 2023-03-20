import React, { useState } from 'react'
import { Product, ProductContextState } from '../types/Product';

interface ProviderProps {
    children: React.ReactNode;
}

export const ProductContext = React.createContext<ProductContextState | null>(null);

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
            quantity: product.quantity,
        };

        let addProduct: boolean = true;
        for (let i: number = 0; i < products.length; i++) {
            if (products[i].itemId === addedProduct.itemId) {
                products[i].quantity++;
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

    const updatequantity = (productId: number, n: number) => {
        for (let i: number = 0; i < products.length; i++) {
            if (productId === products[i].itemId)
                products[i].quantity = products[i].quantity + n;
        }
    }

    const cartTotal = (products: Product[]): number => {
        let total: number = 0;

        for (let i: number = 0; i < products.length; i++) {
            total += products[i].price * products[i].quantity;
        }
        return total;
    }

    const itemSearch = (e: string) => {
        if (e) {
            setSearch(e);
        }
    }


    return (
        <ProductContext.Provider value={{ products, addProductToCart, removeProductFromCart, itemsInCart, cartTotal, cartNumber, updatequantity, itemSearch, search, removeAllProductsFromCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
