import React from 'react'
import styled, { keyframes } from 'styled-components'
import NewTabs from './Tabs/NewTabs'

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.background};
    animation: ${fadeIn} 1s;
`

const Login: React.FC = () => {
    return (
        <Container>
            <NewTabs />
        </Container>
    )
}

export default Login
