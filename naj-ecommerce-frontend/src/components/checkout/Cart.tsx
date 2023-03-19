import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ProductContext } from '../../context/ProductProvider'
import { UserContext } from '../../context/UserProvider'
import { ProductContextState } from '../../types/Product'
import { UserContextState } from '../../types/User'
import NewTabs from '../profile/NewTabs'
import CartBalanceCard from './CartBalanceCard'
import CheckoutForm from './CheckoutForm'
import EmptyCart from './EmptyCart'

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

    const { products, removeProductFromCart } = useContext(ProductContext) as ProductContextState;
    const { currentUser } = useContext(UserContext) as UserContextState;

    let total: number = 0;

    for (let i: number = 0; i < products.length; i++) {
        total += products[i].price;
        if (products[i].amount < 1) {
            removeProductFromCart(products[i].itemId);
        }
    }

    const id = localStorage.getItem('curUserI');

    if (currentUser.userId === 0 && products.length > 0) {
        return (
            <Container>
                <BalanceWrapper style={{ textAlign: 'center' }}>
                    Please Sign in to View Cart
                    <NewTabs />
                </BalanceWrapper>
            </Container>
        )
    }

    return (
        <Container>
            {
                products.length === 0 ?
                    <EmptyCart />
                    : null
            }
            {
                products.length !== 0 && id ?
                    <>
                        <FormWrapper>
                            <CheckoutForm userId={parseInt(id)} firstName={user.firstName} lastName={user.lastName} email={user.email} phoneNumber={user.phoneNumber} address={user.address} password={user.password} />
                        </FormWrapper>
                        <BalanceWrapper>
                            <CartBalanceCard />
                        </BalanceWrapper>
                    </>
                    : null
            }
        </Container >
    )
}

export default Cart
