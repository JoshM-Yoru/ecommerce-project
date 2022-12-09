import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
`
const Wrapper = styled.div`
    height: fit-content;
    width: 400px;
    margin-top: 50px;
    padding: 40px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.body};
    box-shadow: 0 0 10px 3px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Content = styled.div`
    border-top: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10px;
    text-align: center;
`
const Link = styled.p`
    &:hover {
        cursor: pointer;
        color: #6bc5f2;
    }
`

const CheckoutCompleted: React.FC = () => {

    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate('/profile');
    }

    return (
        <Container>
            <Wrapper>
                <Content>
                    Thank You For Your Purchase! Your Order Should Arrive In 1-2 Business Months.
                </Content>
                <Content>
                    To view your receipts, <Link onClick={navigateToProfile}>click here.</Link>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default CheckoutCompleted
