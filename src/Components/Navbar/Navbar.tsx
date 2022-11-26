import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'

const Container = styled.div`
    height: 80px;
    background-color: #eeeeee;
    box-shadow: 0 0 20px 5px rgba(255,255,255,0.2);
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
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
`
const Input = styled.input`
    border: none;
    background-color: #eeeeee;
    &:focus {
        outline: none;
    }
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;
`
const Logo = styled.p`
    align-self: space-between;
    cursor: pointer;
    letter-spacing: 6px;
    font-size: 2.2em;
`
const LogoMirror = styled.p`
    position: absolute;
    cursor: pointer;
    letter-spacing: 6px;
    transform: scale(1, -1) translateY(-67%);
    font-size: 2.2em;
    background: -webkit-linear-gradient(#fff, #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
    margin-left: 24px;
`

const Navbar: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: "gray", fontSize: 16, cursor: 'pointer' }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>NAJ</Logo>
                    <LogoMirror>NAJ</LogoMirror>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
