import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'
import { sliderProducts } from '../../sample'

const slideInAnimation = keyframes`
    0% {transform: translateY(-100%); opacity: 0%},
    100% {transform: translateY(0px) opacity: 100%}
`
const slideLeftAnimation = keyframes`
    0% {transform: translateX(100%); opacity: 0%},
    100% {transform: translateX(0px); opacity: 100%}
`
const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #eeeeee;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div<{ direction: string }>`
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`

const Wrapper = styled.div<{ slideIndex: number }>`
    height: 100%;
    display: flex;
    transition: all 1.3s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div < { bg: string }> `
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    animation: ${slideInAnimation} 1s;
`
const Image = styled.img`
    height: 100%;
    box-shadow: 10px 0 40px 10px rgba(0,0,0,.25);
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 100px;
    margin-top: -200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${slideLeftAnimation} 1.8s;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    width: 200px;
    font-size: 20px;
    border: none;
    background: white;
    /* box-shadow: 0 0 10px 2px rgba(0,0,0,0.2); */
    &:hover {
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
        cursor: pointer;
    }
`

const Slider: React.FC = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction: string) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }

    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/shop');
        window.scrollTo(0, 0);
    }

    window.scrollTo(0, 0);

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderProducts.map((item) => (
                    <Slide bg={item.bg} key={item.title}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button onClick={navigateToShop}>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosIcon />
            </Arrow>
        </Container >
    )
}

export default Slider
