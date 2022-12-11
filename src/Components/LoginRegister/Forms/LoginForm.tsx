import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { User, UserContextState } from '../../../Types/User';
import { Context } from "../../../Context/UserContext";

const fadeIn = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%}
`
const Container = styled.div`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    padding: 40px;
    animation: ${fadeIn} 1s;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
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


export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<boolean>(false);

    //let navigate = useNavigate();

    const { logged, loginUser } = useContext(Context) as UserContextState;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const navigate = useNavigate();

    const handleLogin = async () => {
        let login = {
            email,
            password
        }
        console.log(email, password)

        try {
            const headers = {
                'Access-Control-Allow-Origin': '*'
            };
            let res = await axios.post('http://localhost:8000/users/login', login, { headers });
            setError(false);
            let user = await res.data;
            console.log(user);

            if (user) {
                localStorage.setItem('curUserI', user.userId);
                // localStorage.setItem('currrentUser', JSON.stringify(user))
                loginUser(user);
                localStorage.setItem('curUserL', "true");
                navigate("/shop");
            } else {
                setError(true);
            }
        } catch (e) {
            setError(true);
        }
    }


    return (
        <Container>
            {error ? <h4>Please try again.</h4> : <></>}
            <Form>
                <Label>EMAIL ADDRESS</Label>
                <InputWrapper>
                    <Input onChange={handleChange} name='email' type="email" />
                </InputWrapper>
                <Label>PASSWORD</Label>
                <FinalWrapper>
                    <Input onChange={handleChange} type='password' />
                </FinalWrapper>
                <LoginButton type='button' onClick={handleLogin}>LOGIN</LoginButton>
            </Form>
        </Container>
    );
};

