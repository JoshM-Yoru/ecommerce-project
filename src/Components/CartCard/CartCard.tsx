import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Product } from '../../Types/Product'

const slideInAnimation = keyframes`
    0% {transform: translateX(-100%)},
    100% {transform: translateX(0px)}
`
const textAppear = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%},
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    width: 100%;
    padding-inline: 20px;
`
const ImageContainer = styled.div`
    position: relative; 
    height: 125px;
`
const Image = styled.img`
    height: 100%;
    /* position: absolute; */
    animation: ${textAppear} 1s;
`
const Title = styled.h3`
    font-weight: bold;
    padding-top: 5px;
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
`
const Price = styled.p`
    font-weight: bold;
    font-size: 18px;
`
const Amount = styled.div`

`

const CartCard: React.FC<Product> = ({ productId, img, title, desc, price, amount, itemOrder }) => {
    const Container = styled.div`
    display: flex;
    width: 60%;
    margin: 10px;
    box-shadow: 0 0 30px 10px rgba(0,0,0,.2);
    animation: ${slideInAnimation} calc(${itemOrder} * 0.2s);
`
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={img} />
                </ImageContainer>
                <Title>{title}</Title>
                <PriceContainer>
                    <Price>${price}</Price>
                    <Amount>x   {amount}</Amount>
                </PriceContainer>
            </Wrapper>
        </Container>
    )
}

export default CartCard