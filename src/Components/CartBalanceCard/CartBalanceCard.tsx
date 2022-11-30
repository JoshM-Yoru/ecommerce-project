import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { ProductContextState } from '../../Types/Product'

const Container = styled.div`
    width: 15vw;
    height: 100vh;
    border-left: 3px solid black;
    border-top: 3px solid black;
    box-shadow: -10px 20px 30px 10px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
`
const CartBalance = styled.h2`
    text-decoration: underline;
    align-self: center;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    margin-top: 20vh;
`
const Subtotal = styled.div`
    display: flex;
    justify-content: right;
    height: 100px;
    margin: 10px;
`
const Tax = styled.div`
    display: flex;
    justify-content: right;
    border-bottom: 1px solid black;
    margin: 5px;
    padding: 5px;
`
const Total = styled.div`
    display: flex;
    justify-content: right;
    margin: 10px;
`

const CartBalanceCard: React.FC = () => {

    const { products, cartTotal } = useContext(Context) as ProductContextState;

    return (
        <Container>
            <CartBalance>Cart Balance</CartBalance>
            <Wrapper>
                <Subtotal>Subtotal: ${cartTotal(products)}</Subtotal>
                <Tax>Tax: 59%</Tax>
                <Total>Total: ${cartTotal(products) * 1.59}</Total>
            </Wrapper>
        </Container>
    )
}

export default CartBalanceCard
