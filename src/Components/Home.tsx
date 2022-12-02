import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import ProductProvider from '../Context/ProductContext'
import { UserProvider } from '../Context/UserContext'
import { user } from '../sampleUser'
import Announcement from './Announcement/Announcement'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import ProductLayout from './ProductLayout/ProductLayout'
import Slider from './Slider/Slider'
import { UserProfile } from './UserProfile/UserProfile'

const Container = styled.div`
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
`

const Home: React.FC = () => {
    return (
        <Container>
            <UserProvider>
                <ProductProvider>
                    <Announcement />
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Slider />} />
                        <Route path='/shop' element={<ProductLayout />} />
                        <Route path='/profile' element={<UserProfile id={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email} phoneNumber={user.phoneNumber} address={user.address} password={user.password} />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                    <Footer />
                </ProductProvider>
            </UserProvider>
        </Container>
    );
}

export default Home
