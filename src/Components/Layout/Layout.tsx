import React, { useState } from 'react'
import styled from 'styled-components'
import { products } from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import { Product } from '../Products'

const Container = styled.div`
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    flex-wrap: wrap;
    width: 80%;
`

const Layout: React.FC = () => {

    return (
        <Container>
            <Wrapper>
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={product.title} productId={product.productId} img={product.img} title={product.title} desc={product.desc} price={product.price} />
                        );
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default Layout
