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
const ButtonWrapper = styled.div`
    text-align: center;
`
const Button = styled.button`
    width: 200px;
    border: none;
    background: #b56464;
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
        window.scrollTo(0, 0);
    }
    const navigateToShop = () => {
        navigate('/shop');
        window.scrollTo(0, 0);
    }

    return (
        <Container>
            <ShoppingCartOutlined style={{ flex: 1 }} />
            <EmptyTitle>Your Cart Is Empty</EmptyTitle>
            <SignIn>Log in now to see your cart and get shopping!</SignIn>
            <ButtonWrapper>
                <Button onClick={navigateToShop}>Shop Now</Button>
                <Button onClick={navigateToLogin}>Log In</Button>
            </ButtonWrapper>
        </Container>
    )
}

export default EmptyCart
