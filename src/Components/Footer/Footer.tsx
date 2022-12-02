import React from 'react'
import styled, { keyframes } from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const slideInAnimation = keyframes`
    0% {transform: translateX(100%); opacity: 0%},
    100% {transform: translateX(0px) opacity: 100%}
`
const Container = styled.div`
    height: 100%;
    border-top: 2px solid #ccc;
    animation: ${slideInAnimation} 1s;
`
const Wrapper = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 12px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 8px;
    display: flex;
    align-items: center;
`


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    ©NAJ Clothing
                </Left>
                <Right>
                    <MenuItem >
                        <LocalPhoneIcon style={{ color: "gray" }} />
                    </MenuItem>
                    <MenuItem >888-888-8888</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer
