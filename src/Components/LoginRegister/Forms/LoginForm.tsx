import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './Forms.css'


export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [logged, setLogged] = useState<boolean>(false);

    //let navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleLogin = async () => {
        let login = {
            email,
            password
        }

        try {
            let res = await axios.post('http://localhost:8000/user/login', login);
            setError(false);
            let user = await res.data;

            if (user.length !== 0) {
                localStorage.setItem('user', JSON.stringify(user.userId));
                setLogged(true);
            } else {
                setError(true);
            }
        } catch (e) {
            setError(true);
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        setLogged(false);
    }



    if (logged) {
        return (
            <div className='logged-in'>
                <h3>Logged In as `${localStorage.getItem('id')}`</h3>
                <button onClick={handleLogout}>Log out</button>
            </div>
        );
    } else {
        return (
            <div className='not-logged-in'>
                {error ? <h4>Please try again.</h4> : <></>}
                <h4>Email:</h4>
                <input type='text' name='email' onChange={handleChange} />
                <h4>Password:</h4>
                <input type='password' name='password' onChange={handleChange} />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

};

