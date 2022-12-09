import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import ProductProvider from '../Context/ProductContext'
import { UserProvider } from '../Context/UserContext'
import { user } from '../sampleUser'
import Announcement from './Announcement/Announcement'
import Cart from './Cart/Cart'
import CheckoutCompleted from './CheckoutCompleted/CheckoutCompleted'
import Footer from './Footer/Footer'
import Login from './LoginRegister/Login'
import Navbar from './Navbar/Navbar'
import ProductLayout from './ProductLayout/ProductLayout'
import Slider from './Slider/Slider'
import { UserProfile } from './UserProfile/UserProfile'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { User } from '../Types/User'
import axios from 'axios'

const Container = styled.div`
    background-color: ${(props) => props.theme.body};
    display: flex;
    flex-direction: column;
    height: 100vh;
`
const ThemeButton = styled.button`
    position: fixed;
    z-index: 3;
    bottom: 60px;
    right: 20px;
    background: transparent;
    cursor: pointer;
    border: none;
`

const Home: React.FC = () => {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', theme)
            localStorage.getItem('theme') === 'light' ? setTheme('dark') : setTheme('light');
        } else {
            theme === 'light' ? setTheme('dark') : setTheme('light');
        }
    }

    const id: number = Number(localStorage.getItem('curUserI'));
    const [user, setUser] = useState<User>();
    const log = localStorage.getItem("curUserL");

    const getTheUser = async () => {

        try {
            let res = await axios.get('http://localhost:8000/users/' + id);
            let tuser = await res.data;
            setUser(tuser);
            console.log(user);
        } catch (e) { }
    };

    console.log(localStorage)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <ThemeButton onClick={themeToggler}>
                {
                    theme === 'light' ?
                        <DarkModeOutlinedIcon style={{ fontSize: '3em', borderRadius: '50%', background: 'transparent', color: '#333' }} />
                        :
                        <LightModeOutlinedIcon style={{ fontSize: '3em', borderRadius: '50%', background: 'transparent', color: 'white' }} />
                }
            </ThemeButton>
            <Container>
                <UserProvider>
                    <ProductProvider>
                        <Announcement />
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Slider />} />
                            <Route path='/shop' element={<ProductLayout />} />
                            {
                                log && user ?
                                    <Route path='/profile' element={<UserProfile userId={user.userId} firstName={user.firstName} lastName={user.lastName} email={user.email} phoneNumber={user.phoneNumber} address={user.address} password={user.password} />} />
                                    : null
                            }

                            <Route path='/cart' element={<Cart />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/success' element={<CheckoutCompleted />} />
                        </Routes>
                        <Footer />
                    </ProductProvider>
                </UserProvider>
            </Container>
        </ThemeProvider>
    );
}

export default Home
