import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    width: 600px;
    background-color: ${(props) => props.theme.body};
    animation: ${fadeIn} 1s;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
`
const NoPastOrder: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                You Have No Previous Orders.
            </Wrapper>
        </Container>
    )
}

export default NoPastOrder
