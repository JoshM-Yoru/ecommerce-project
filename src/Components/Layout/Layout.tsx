import React, { useState } from 'react'
import styled from 'styled-components'
import { products } from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import { Product } from '../Products'

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Layout: React.FC = () => {

    // const [products, setProducts] = useState<Product[]>([]);
    // const addProduct = (product: Product) => {
    //     setProducts([...products, product])
    // }

    return (
        <Container>
            {
                products.map((product) => {
                    return (
                        <ProductCard key={product.title} productId={product.productId} img={product.img} title={product.title} desc={product.desc} price={product.price} />
                    );
                })
            }
        </Container>
    )
}

export default Layout
