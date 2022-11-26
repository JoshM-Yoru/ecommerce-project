import React from 'react'
import styled from 'styled-components'
import { Product } from '../Products'

const Container = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    align-items: center;
    box-shadow: 10px 0 20px 10px rgba(0,0,0,.1);
    border-radius: 5px;
`
const ImageContainer = styled.div`
    position: relative; 
    height: 250px;
`
const Image = styled.img`
    height: 100%;
    /* position: absolute; */
`
const Title = styled.h3`
    font-weight: bold;
    padding-top: 5px;
`
const DescriptionContainer = styled.div`
    height: 150px;
    width: 250px;
    display: flex;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
`
const Description = styled.p`
`
const PriceContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Price = styled.p`
    margin: 5px;
    font-weight: bold;
    font-size: 18px;
`
const Cart = styled.button`
    margin: 5px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`

const ProductCard: React.FC<Product> = ({ productId, img, title, desc, price }) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={img} />
            </ImageContainer>
            <Title>{title}</Title>
            <DescriptionContainer>
                <Description>{desc}</Description>
                <PriceContainer>
                    <Price>${price}</Price>
                    <Cart>Add to Cart</Cart>
                </PriceContainer>
            </DescriptionContainer>
        </Container>
    )
}

export default ProductCard
