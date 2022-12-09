import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { ProductContextState } from '../../Types/Product'
import { User } from '../../Types/User'

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    width: 500px;
    padding-block: 10px;
    box-shadow: 0 0 10px 3px rgba(0,0,0,0.2);
    background-color: ${(props) => props.theme.body};
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
    text-align: center;
`
const CCWrapper = styled.div`
    width: 100%;
    margin-inline: 5px;
    text-align: center;
    display: flex;
    justify-content: left;
`
const Label = styled.div`
    font-weight: bold;
    margin: 10px;
    width: fit-content;
`
const Input = styled.input`
    width: 95%;
    padding: 5px;
    padding-inline: 8px;
    margin-bottom: 15px;
    color: ${(props) => props.theme.text};
    outline: 1px solid ${(props) => props.theme.border};
    border: none;
    background: transparent;
`
const PlaceOrder = styled.button`
    border: none;
    background: #047d40;
    padding: 15px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.3);
    }
`

const CheckoutForm: React.FC<User> = ({
    userId: id,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {

    const { products, removeAllProductsFromCart } = useContext(Context) as ProductContextState;

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

    const navigate = useNavigate();
    const navigateToSuccess = () => {
        createReceipt();
        navigate('/success');
        removeAllProductsFromCart();
    }

    type CreateReceiptResponse = {
        userId: number;
        items: number[];
    }

    async function createReceipt() {

        let amountOfItems = 0;
        for (let i = 0; i < products.length; i++) {
            amountOfItems += products[i].amount
        }

        try {

            const { data } = await axios.post<CreateReceiptResponse>(
                "http://localhost:8000/receipts/create",
                {
                    userId: id,
                    items: products,
                    amountOfItems: amountOfItems
                }
            )

            console.log(data);
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);

                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    return (
        <Container>
            <Form>
                <InputWrapper>
                    <Label>EMAIL ADDRESS</Label>
                    <Input onChange={handleEmailChange} required type="email" value={inputEmail}></Input>
                </InputWrapper>
                <InputWrapper>
                    <Label>DELIVERY ADDRESS</Label>
                    <Input onChange={handleAddressChange} value={inputAddress}></Input>
                </InputWrapper>
                <InputWrapper>
                    <Label>PHONE NUMBER</Label>
                    <Input onChange={handlePhoneNumberChange} type="tel" value={inputPhoneNumber}></Input>
                </InputWrapper>
                <InputWrapper>
                    <Label>FIRST NAME</Label>
                    <Input onChange={handleFirstNameChange} value={inputFirstName}></Input>
                </InputWrapper>
                <InputWrapper>
                    <Label>LAST NAME</Label>
                    <Input onChange={handleLastNameChange} value={inputLastName}></Input>
                </InputWrapper>
                <InputWrapper>
                    <Label>CREDIT CARD NUMBER</Label>
                    <Input maxLength={16} required placeholder='****************' />
                </InputWrapper>
                <CCWrapper>
                    <InputWrapper>
                        <Label>EXP DATE</Label>
                        <Input type='text' required placeholder='mm/yyyy' />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>CVV</Label>
                        <Input maxLength={3} required placeholder='***' />
                    </InputWrapper>
                </CCWrapper>
                <PlaceOrder onClick={navigateToSuccess}>SUBMIT ORDER</PlaceOrder>
            </Form>
        </Container >
    )
}

export default CheckoutForm
