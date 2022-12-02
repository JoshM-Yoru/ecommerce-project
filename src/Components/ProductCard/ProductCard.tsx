import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { Product, ProductContextState } from '../../Types/Product'

const slideInAnimation = keyframes`
    0% {transform: translateX(100%)},
    100% {transform: translateX(0px)}
`
const textAppear = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%},
`
const Container = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    margin: 15px;
    padding: 10px;
    align-items: center;
    box-shadow: 10px 0 30px 10px rgba(0,0,0,.2);
    border-radius: 5px;
    background: white;
    animation: ${slideInAnimation} 1s;
`
const ImageContainer = styled.div`
    position: relative; 
    height: 250px;
`
const Image = styled.img`
    height: 100%;
    /* position: absolute; */
    animation: ${textAppear} 1s;
`
const Title = styled.h3`
    font-weight: bold;
    padding-top: 5px;
    animation: ${textAppear} 1s;
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
    animation: ${textAppear} 1s;
`
const PriceContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Price = styled.p`
    margin: 5px;
    font-weight: bold;
    font-size: 18px;
    animation: ${textAppear} 1s;
`
const Cart = styled.button`
    margin: 5px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    animation: ${textAppear} 1s;
`

const ProductCard: React.FC<Product> = ({ productId, img, title, desc, price, amount }) => {

    const { addProductToCart, products, itemsInCart } = useContext(Context) as ProductContextState;

    const addToCart = () => {
        addProductToCart({ productId, img, title, desc, price, amount });
        itemsInCart(1);
    }

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
                    <Cart onClick={addToCart}>Add to Cart</Cart>
                </PriceContainer>
            </DescriptionContainer>
        </Container>
    )
}

export default ProductCard
