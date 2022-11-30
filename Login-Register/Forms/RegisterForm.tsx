import React, {useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Forms.css'

export const RegisterForm : React.FC = () =>{
    const [firstName, setFirstname] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        if(e.target.name === "email"){
            setEmail(e.target.value);
        } else if(e.target.name === "password") {
            setPassword(e.target.value);
        }else if(e.target.name === "firstName"){
            setFirstname(e.target.value);    
        }else if(e.target.name === "lastName"){
            setLastName(e.target.value);
        }
    }

    const handleRegister = async() => {
        let register = {
            firstName,
            lastName,
            email,
            password
        }
        //console.log(register);

        try{
            let res = await axios.post('http://localhost:8000/user/register', register);
            setError(false);
            let user = await res.data;
        }catch(e){
            setError(true);
        }
    }

    return(
        <div className='register'>
        <h2>First Name:</h2>
        <input type='text' name='firstName' onChange={handleChange}/>
        <h2>Last Name:</h2>
        <input type='text' name='lastName' onChange={handleChange}/>
        <h3>Email:</h3>
        <input type='text' name='email' onChange={handleChange}/>
        <h3>Password:</h3>
        <input type='password' name='password' onChange={handleChange}/>
        <button onClick={handleRegister}>Register</button>
        </div>
    );
}