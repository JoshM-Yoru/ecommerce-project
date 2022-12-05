import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { User } from '../../Types/User'

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    width: 500px;
    padding-block: 10px;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
    background: white;
    animation: ${fadeIn} 1s;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-inline: 20px;
    padding-block: 10px;
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
    background: #047d40;
    padding: 15px;
    font-size: 20px;
    color: #eeeeee;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.3);
    }
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

    const [inputEmail, setInputEmail] = useState<string>(email)
    const [inputAddress, setInputAddress] = useState<string>(address)
    const [inputPhoneNumber, setInputPhoneNumber] = useState<string>(phoneNumber)
    const [inputFirstName, setInputFirstName] = useState<string>(firstName)
    const [inputLastName, setInputLastName] = useState<string>(lastName)

    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputEmail(e.currentTarget.value);
    }

    const handleAddressChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputAddress(e.currentTarget.value);
    }

    const handlePhoneNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputPhoneNumber(e.currentTarget.value);
    }

    const handleFirstNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputFirstName(e.currentTarget.value);
    }

    const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInputLastName(e.currentTarget.value);
    }

    return (
        <Container>
            <Form>
                <Label>EMAIL ADDRESS</Label>
                <InputWrapper>
                    <Input onChange={handleEmailChange} type="email" value={inputEmail}></Input>
                </InputWrapper>
                <Label>DELIVERY ADDRESS</Label>
                <InputWrapper>
                    <Input onChange={handleAddressChange} value={inputAddress}></Input>
                </InputWrapper>
                <Label>PHONE NUMBER</Label>
                <InputWrapper>
                    <Input onChange={handlePhoneNumberChange} type="tel" value={inputPhoneNumber}></Input>
                </InputWrapper>
                <Label>FIRST NAME</Label>
                <InputWrapper>
                    <Input onChange={handleFirstNameChange} value={inputFirstName}></Input>
                </InputWrapper>
                <Label>LAST NAME</Label>
                <FinalWrapper>
                    <Input onChange={handleLastNameChange} value={inputLastName}></Input>
                </FinalWrapper>
                <PlaceOrder>SUBMIT ORDER</PlaceOrder>
            </Form>
        </Container >
    )
}

export default CheckoutForm
