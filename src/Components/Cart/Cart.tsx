import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { user } from '../../sampleUser'
import { ProductContextState } from '../../Types/Product'
import CartBalanceCard from '../CartBalanceCard/CartBalanceCard'
import CartCard from '../CartCard/CartCard'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import EmptyCart from '../EmptyCart/EmptyCart'

const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    justify-content: center; 
    padding-block: 50px;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
`
const FormWrapper = styled.div`
    margin-right: 50px;
    height: fit-content;
`
const BalanceWrapper = styled.div`
`

const Cart: React.FC = () => {

    const { products, removeProductFromCart } = useContext(Context) as ProductContextState;

    let total: number = 0;

    for (let i: number = 0; i < products.length; i++) {
        total += products[i].price;
        if (products[i].amount < 1) {
            removeProductFromCart(products[i].itemId);
        }
    }

    return (
        <Container>
            {
                products.length === 0 ?
                    <EmptyCart />
                    : null
            }
            {
                products.length !== 0 ?
                    <>
                        <FormWrapper>
                            <CheckoutForm userId={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email} phoneNumber={user.phoneNumber} address={user.address} password={user.password} />
                        </FormWrapper>
                        <BalanceWrapper>
                            <CartBalanceCard />
                        </BalanceWrapper>
                    </>
                    : null
            }
        </Container>
    )
}

export default Cart
