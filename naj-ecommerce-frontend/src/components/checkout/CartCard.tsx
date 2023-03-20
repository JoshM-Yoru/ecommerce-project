import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProductContext } from '../../context/ProductProvider'
import { Product, ProductContextState } from '../../types/Product'

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.body};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-end;
    margin: 10px;
    width: 100%;
    padding-inline: 20px;
`
const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
`
const ImageContainer = styled.div`
    height: 80px;
    flex: 1;
`
const Image = styled.img`
    height: 100%;
    /* position: absolute; */
`
const Title = styled.div`
    padding-top: 5px;
    font-size: 14px;
    margin-bottom: 10px;
`
const CostWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Price = styled.p`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5px;
    margin-left: -10px;
`
const Quantity = styled.p`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const AdjustContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Minus = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`
const Plus = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`

const CartCard: React.FC<Product> = ({ itemId: productId, imageUrl: img, name: title, description: desc, price, quantity }) => {

    const { itemsInCart, updateQuantity, removeProductFromCart } = useContext(ProductContext) as ProductContextState;

    const decrementItem = () => {
        itemsInCart(-1);
        updateQuantity(productId, -1);
    }
    const incrementItem = () => {
        itemsInCart(1);
        updateQuantity(productId, 1);
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
                <DescriptionWrapper>
                    <Title>{title}</Title>
                    <CostWrapper>
                        <Price>${price.toFixed(2)}</Price>
                        <Quantity>x {quantity}</Quantity>
                        <AdjustContainer>
                            <Plus onClick={incrementItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </Plus>
                            <Minus onClick={decrementItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Minus>
                        </AdjustContainer>
                    </CostWrapper>
                </DescriptionWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500 cursor-pointer" onClick={deleteItem}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </Wrapper>
        </Container>
    )
}

export default CartCard
