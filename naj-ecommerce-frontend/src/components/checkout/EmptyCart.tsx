import React from 'react'
import styled, { keyframes } from 'styled-components'
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 flex-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
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
