import React from 'react'
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
            <Slider />
            <Layout />
        </Container>
    );
}

export default Home
