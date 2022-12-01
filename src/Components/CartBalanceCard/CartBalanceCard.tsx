import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { ProductContextState } from '../../Types/Product'

const Container = styled.div`
    width: 15vw;
    height: 50vh;
    border-left: 3px solid #ccc;
    border-top: 3px solid #ccc;
    box-shadow: 0 20px 30px 10px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const CartBalance = styled.h3`
    text-decoration: underline;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    margin-top: 20vh;
    height: 80%;
`
const Subtotal = styled.div`
    display: flex;
    justify-content: right;
    height: 100px;
    margin-block: 10px;
`
const Tax = styled.div`
    display: flex;
    justify-content: right;
    border-bottom: 1px solid black;
    margin-block: 5px;
    padding: 5px;
`
const Total = styled.div`
    display: flex;
    justify-content: right;
    margin-block: 10px;
`

const CartBalanceCard: React.FC = () => {

    const { products, cartTotal } = useContext(Context) as ProductContextState;

    return (
        <Container>
            <CartBalance>Summary</CartBalance>
            <Wrapper>
                <Subtotal>Subtotal: ${cartTotal(products)}</Subtotal>
                <Tax>Tax: 59%</Tax>
                <Total>Total: ${(cartTotal(products) * 1.59).toFixed(2)}</Total>
            </Wrapper>
        </Container>
    )
}

export default CartBalanceCard
