import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { ProductContextState } from '../../Types/Product'
import CartBalanceCard from '../CartBalanceCard/CartBalanceCard'
import CartCard from '../CartCard/CartCard'

const Container = styled.div`
    display: flex;
    background: #eeeeee;
`
const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex:5; 
`
const BalanceWrapper = styled.div`
    flex: 1;
`

const Cart: React.FC = () => {

    const { products, removeProductFromCart } = useContext(Context) as ProductContextState;

    let total: number = 0;

    for (let i: number = 0; i < products.length; i++) {
        total += products[i].price;
        if (products[i].amount < 1) {
            removeProductFromCart(products[i].productId);
        }
    }


    return (
        <Container>
            <Wrapper>
                {
                    products.map((product, index) => {
                        return (
                            <CartCard key={index} productId={product.productId} img={product.img} title={product.title} desc={product.desc} price={product.price} amount={product.amount} itemOrder={index + 1} />
                        );
                    })
                }
            </Wrapper>
            <BalanceWrapper>
                <CartBalanceCard />
            </BalanceWrapper>
        </Container>
    )
}

export default Cart
