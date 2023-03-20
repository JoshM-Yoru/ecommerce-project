import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { UserContext } from '../../context/UserProvider';
import { UserContextState } from '../../types/User';

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    background-color: ${(props) => props.theme.body};
    padding: 40px;
    animation: ${fadeIn} 1s;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const InputWrapper = styled.div`
    width: 100%;
    text-align: center;
`
const FinalWrapper = styled.div`
    width: 100%;
    margin: 5px;
    text-align: center;
`
const Label = styled.label`
    font-weight: bold;
    margin: 10px;
    text-align: left;
`
const Input = styled.input`
    font-size: 20px;
    width: 95%;
    padding: 5px;
    padding-inline: 8px;
    margin-bottom: 15px;
    color: ${(props) => props.theme.text};
    outline: 1px solid ${(props) => props.theme.border};
    border: none;
    background: transparent;
`
const LoginButton = styled.button`
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

export const RegisterForm: React.FC = () => {
    const [firstName, setFirstname] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);


    const { logged, loginUser } = useContext(UserContext) as UserContextState;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "firstName") {
            setFirstname(e.target.value);
        } else if (e.target.name === "lastName") {
            setLastName(e.target.value);
        }
    }

    const navigate = useNavigate();

    const handleRegister = async () => {
        let register = {
            firstName,
            lastName,
            email,
            password
        };

        try {
            const res = await axios.post('http://localhost:8000/users/register', register);
            setError(false);
            const user = await res.data;
            if (user) {
                loginUser(user);
                localStorage.setItem('curUserI', user.userId);
                localStorage.setItem('curUserL', "true");
            }
        } catch (e) {
            setError(true);
        }

    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate("/profile")
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label>FIRST NAME</Label>
                <InputWrapper>
                    <Input onChange={handleChange} name='firstName' type="text" />
                </InputWrapper>
                <Label>LAST NAME</Label>
                <InputWrapper>
                    <Input onChange={handleChange} name='lastName' type="text" />
                </InputWrapper>
                <Label>EMAIL ADDRESS</Label>
                <InputWrapper>
                    <Input onChange={handleChange} name='email' type="email" />
                </InputWrapper>
                <Label>PASSWORD</Label>
                <FinalWrapper>
                    <Input onChange={handleChange} name='password' type="password" />
                </FinalWrapper>
                <LoginButton onClick={handleRegister}>REGISTER</LoginButton>
            </Form>
        </Container>
    );
}
