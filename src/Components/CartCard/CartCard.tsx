import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { Product, ProductContextState } from '../../Types/Product'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

var counter: number = 1;

const slideInAnimation = keyframes`
    0% {transform: translateX(-100%)},
    100% {transform: translateX(0px)}
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-block: 10px;
    box-shadow: 0 0 30px 10px rgba(0,0,0,.2);
    animation: ${slideInAnimation} ${counter}s;
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
const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Amount = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
`
const AdjustContainer = styled.div`
    display: flex;
`
const Minus = styled.button`
    background: transparent;
    border: none;
    margin-inline: 10px;
    margin-block: 5px;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    width: 20px;
`
const Plus = styled.button`
    background: transparent;
    border: none;
    margin-inline: 10px;
    margin-block: 5px;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    width: 20px;
`

const CartCard: React.FC<Product> = ({ productId, img, title, desc, price, amount, itemOrder }) => {

    const { itemsInCart, updateAmount, removeProductFromCart } = useContext(Context) as ProductContextState;

    const decrementItem = () => {
        itemsInCart(-1);
        updateAmount(productId, -1);
    }
    const incrementItem = () => {
        itemsInCart(1);
        updateAmount(productId, 1);
    }
    const deleteItem = () => {
        removeProductFromCart(productId);
    }

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={img} />
                </ImageContainer>
                <Title>{title}</Title>
                <PriceContainer>
                    <Price>${price}</Price>
                    <AmountContainer>
                        <Amount>x   {amount}</Amount>
                        <AdjustContainer>
                            <Minus onClick={decrementItem}>-</Minus>
                            <Plus onClick={incrementItem}>+</Plus>
                        </AdjustContainer>
                    </AmountContainer>
                    <DeleteOutlineIcon style={{ color: 'red', cursor: 'pointer', margin: '5px' }} onClick={deleteItem} />
                </PriceContainer>
            </Wrapper>
        </Container>
    )
}

export default CartCard
