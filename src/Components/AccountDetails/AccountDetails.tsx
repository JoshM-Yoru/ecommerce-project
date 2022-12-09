import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { User } from '../../Types/User'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import axios from 'axios';

const textAppear = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%},
`
const Container = styled.div`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
    width: 600px;
    margin-top: 10px;
    height: fit-content
    animation: ${textAppear} 1s;
`
const Title = styled.div`
    padding: 30px 25px 10px;
    font-weight: bold;
    font-size: 2em;
`
const Information = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px 25px 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-inline: 25px;
    padding-bottom: 10px;
`
const InputWrapper = styled.div`
    width: 100%;
    margin: 5px;
    text-align: center;
`
const Label = styled.label`
    font-weight: bold;
    font-size: 18px;
    margin-block: 10px;
    text-align: left;
`
const Input = styled.input`
    width: 95%;
    font-size: 18px;
    padding: 5px;
    padding-inline: 8px;
    margin-bottom: 15px;
    color: ${(props) => props.theme.text};
    outline: 1px solid ${(props) => props.theme.border};
    background: transparent;
    border: none;
`
const SaveChanges = styled.button`
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

const AccountDetails: React.FC<User> = ({
    userId: id,
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
    const [infoSaved, setInfoSaved] = useState<boolean>(false);

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

    const handleSave = async () => {
        try {
            let saved = {
                id,
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                password
            }
            const headers = {
                'Access-Control-Allow-Origin': '*'
            };

            let res = await axios.put('http://localhost:8000/users/', saved, { headers });
            let sUser = await res.data;
            if (sUser.length !== 0) {
                setInfoSaved(true);
            }

        } catch (e) { }
    }

    return (
        <Container>
            <Title>
                <Person2OutlinedIcon style={{ fontSize: '2rem' }} /> <br />
                MY ACCOUNT DETAILS
            </Title>
            <Information>
                Feel free to edit any fields to keep your profile up to date. Asterisks (*) are used to denote a required field.
            </Information>
            <Form>
                <Label>EMAIL ADDRESS*</Label>
                <InputWrapper>
                    <Input onChange={handleEmailChange} type="email" value={inputEmail}></Input>
                </InputWrapper>
                <Label>DELIVERY ADDRESS*</Label>
                <InputWrapper>
                    <Input onChange={handleAddressChange} value={inputAddress}></Input>
                </InputWrapper>
                <Label>PHONE NUMBER</Label>
                <InputWrapper>
                    <Input onChange={handlePhoneNumberChange} type="tel" value={inputPhoneNumber}></Input>
                </InputWrapper>
                <Label>FIRST NAME*</Label>
                <InputWrapper>
                    <Input onChange={handleFirstNameChange} value={inputFirstName}></Input>
                </InputWrapper>
                <Label>LAST NAME*</Label>
                <InputWrapper>
                    <Input onChange={handleLastNameChange} value={inputLastName}></Input>
                </InputWrapper>
                <SaveChanges>SAVE CHANGES</SaveChanges>
            </Form>
        </Container>
    )
}

export default AccountDetails
