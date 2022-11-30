import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import ProductProvider from '../Context/ProductContext'
import Announcement from './Announcement/Announcement'
import Cart from './Cart/Cart'
import Navbar from './Navbar/Navbar'
import ProductLayout from './ProductLayout/ProductLayout'
import Slider from './Slider/Slider'
import { UserProfile } from './UserProfile/UserProfile'

const Container = styled.div`
    background-color: #eeeeee;
`

const Home: React.FC = () => {
    return (
        <Container>
            <ProductProvider>
                {/* <Announcement /> */}
                <Navbar />
                <Routes>
                    <Route path='/' element={<Slider />} />
                    <Route path='/shop' element={<ProductLayout />} />
                    {/* <Route path='/profile' element={<UserProfile id=1 firstName="Joshua" lastName="Maciel" email="josh@mail.com" phoneNumber="888888888" address="123 address st" password="notpassword" />} /> */}
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </ProductProvider>
        </Container>
    );
}

export default Home
