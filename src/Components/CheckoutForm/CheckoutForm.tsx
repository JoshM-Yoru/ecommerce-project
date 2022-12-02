import React from 'react'
import styled, { keyframes } from 'styled-components'
import { User } from '../../Types/User'

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    height: 650px;
    width: 500px;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
    background: white;
    animation: ${fadeIn} 1s;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-inline: 20px;
    padding-block: 10px;
    justify-content: space-evenly;
`
const InputWrapper = styled.div`
    width: 100%;
    margin: 5px;
    border-bottom: 2px solid #ccc;
    text-align: center;
`
const FinalWrapper = styled.div`
    width: 100%;
    margin: 5px;
    text-align: center;
`
const Label = styled.label`
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
    text-align: left;
`
const Input = styled.input`
    font-size: 20px;
    width: 95%;
    padding: 5px;
    padding-inline: 8px;
    margin-bottom: 15px;
    color: #222;
    outline: 1px solid #ccc;
    border: none;
`
const PlaceOrder = styled.button`
    border: none;
    background: #0eb05a;
    padding: 15px;
    font-size: 20px;
    color: #eeeeee;
    cursor: pointer;
`

const CheckoutForm: React.FC<User> = ({
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {
    return (
        <Container>
            <Form>
                <Label>EMAIL ADDRESS</Label>
                <InputWrapper>
                    <Input type="email" value={email}></Input>
                </InputWrapper>
                <Label>DELIVERY ADDRESS</Label>
                <InputWrapper>
                    <Input value={address}></Input>
                </InputWrapper>
                <Label>PHONE NUMBER</Label>
                <InputWrapper>
                    <Input type="tel" value={phoneNumber}></Input>
                </InputWrapper>
                <Label>FIRST NAME</Label>
                <InputWrapper>
                    <Input value={firstName}></Input>
                </InputWrapper>
                <Label>LAST NAME</Label>
                <FinalWrapper>
                    <Input value={lastName}></Input>
                </FinalWrapper>
                <PlaceOrder>SUBMIT ORDER</PlaceOrder>
            </Form>
        </Container >
    )
}

export default CheckoutForm
