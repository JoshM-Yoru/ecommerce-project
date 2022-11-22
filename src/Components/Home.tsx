import React from 'react'
import styled from 'styled-components'
import Announcement from './Announcement/Announcement'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'

const Container = styled.div``

const Home: React.FC = () => {
    return (
        <Container>
            {/* <Announcement /> */}
            <Navbar />
            <Slider />
        </Container>
    );
}

export default Home
