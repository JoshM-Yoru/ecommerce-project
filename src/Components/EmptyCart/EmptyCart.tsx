import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ShoppingCartOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    margin-top: 100px;
    animation: ${fadeIn} 1s;
`
const EmptyTitle = styled.div`
    flex: 1;
`
const SignIn = styled.div`
    text-align: center;
    margin-right: 10px;
`
const SignInButton = styled.button`
    width: 200px;
    border: none;
    background: #b57f7f;
    font-size: 24px;
    color: #eeeeee;
    margin-block: 15px;
    padding: 5px 20px 5px;
    cursor: pointer;
`
const ButtonWrapper = styled.div`
    text-align: center;
`
const ShopButton = styled.button`
    width: 200px;
    border: none;
    background: #b57f7f;
    font-size: 24px;
    color: #eeeeee;
    margin-block: 15px;
    padding: 5px 10px 5px;
    cursor: pointer;
    margin-right: 10px;
`

const EmptyCart: React.FC = () => {

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
    }
    const navigateToShop = () => {
        navigate('/shop');
    }

    return (
        <Container>
            <ShoppingCartOutlined style={{ flex: 1 }} />
            <EmptyTitle>Your Cart Is Empty</EmptyTitle>
            <SignIn>Log in now to see your cart and get shopping!</SignIn>
            <ButtonWrapper>
                <ShopButton onClick={navigateToShop}>Shop Now</ShopButton>
                <SignInButton onClick={navigateToLogin}>Log In</SignInButton>
            </ButtonWrapper>
        </Container>
    )
}

export default EmptyCart
