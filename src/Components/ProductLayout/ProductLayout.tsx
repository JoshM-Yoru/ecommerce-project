import React from 'react'
import styled from 'styled-components'
import { products } from '../../data'
import ProductCard from '../ProductCard/ProductCard'

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

const ProductLayout: React.FC = () => {

    return (
        <Container>
            <Wrapper>
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={product.productId} productId={product.productId} img={product.img} title={product.title} desc={product.desc} price={product.price} amount={1} />
                        );
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default ProductLayout
