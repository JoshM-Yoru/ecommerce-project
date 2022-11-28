import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from './Announcement/Announcement'
import Layout from './Layout/Layout'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'

const Container = styled.div``

const Home: React.FC = () => {
    return (
        <Container>
            {/* <Announcement /> */}
            <Navbar />
            <Routes>
                <Route path='/' element={<Slider />} />
                <Route path='/shop' element={<Layout />} />
            </Routes>
        </Container>
    );
}

export default Home
