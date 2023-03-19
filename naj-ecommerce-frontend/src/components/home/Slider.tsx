import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const slideInAnimation = keyframes`
    0% {transform: translateY(-100%); opacity: 0%},
    100% {transform: translateY(0px) opacity: 100%}
`
const slideLeftAnimation = keyframes`
    0% {transform: translateX(100%); opacity: 0%},
    100% {transform: translateX(0px); opacity: 100%}
`
const Arrow = styled.div<{ direction: string }>`
    width: 40px;
    height: 40px;
    background-color: rgba(255,255,255,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 50%;
    /* left: ${props => props.direction === "left" && "10px"}; */
    /* right: ${props => props.direction === "right" && "10px"}; */
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`

const Wrapper = styled.div<{ slideIndex: number }>`
    height: 100%;
    display: flex;
    transition: all 1.3s ease;
    /* transform:translateX(${props => props.slideIndex * -100}vw); */
`
const Slide = styled.div < { bg: string }> `
    display: flex;
    width: 100vw;
    height: 100vh;
    /* background-color: #${props => props.bg}; */
`
const ImgContainer = styled.div`
    flex: 2;
    height: 100%;
    animation: ${slideInAnimation} 1s;
`
const Image = styled.img`
    height: 100%;
    padding-bottom: 100px;
    box-shadow: 10px 0 40px 10px rgba(0,0,0,.25);
`
const InfoContainer = styled.div`
    flex: 3;
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
    /* background-color: ${(props) => props.theme.body}; */
    /* color: ${(props) => props.theme.text}; */
    /* box-shadow: 0 0 10px 2px rgba(0,0,0,0.2); */
    &:hover {
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
        cursor: pointer;
    }
`

const Slider: React.FC = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const [timerState, setTimerState] = useState(3500)

    const scrollSlider = () => {
        setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
    }

    // const scrollTimer = (b: boolean) => {
    //     if (b) {
    //         return setInterval(scrollSlider, timerState);
    //     }
    // }

    // let timer = scrollTimer();
    // useEffect(() => {
    //     scrollTimer(true);
    // }, [])

    // scrollTimer(true);
    // const resetScrollTimer = () => {
    //     setTimerState(3500)
    // }

    const handleClick = (direction: string) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
        // resetScrollTimer();
    }

    // const navigate = useNavigate();
    // const navigateToShop = () => {
    //     navigate('/shop');
    //     window.scrollTo(0, 0);
    // }

    window.scrollTo(0, 0);

    return (
        <div className='w-full flex relative overflow-hidden'>
            <div className='opacity-60' direction="left" onClick={() => handleClick("left")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <Wrapper slideIndex={slideIndex}>
                {sliderProducts.map((item: any) => (
                    <Slide bg={item.bg} key={item.title}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button >SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </Arrow>
        </div>
    )
}

export default Slider

const sliderProducts = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1623288516140-47a0a17cec7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80",
        title: "SUMMER SALE",
        desc: "GET ALL SUMMER ITEMS ON SALE",
        bg: "fce1e4",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        title: "FEATURED WATCH",
        desc: "GET THIS WATCH NOW FOR $89.99, DEFINITELY NOT FAKE OR STOLEN",
        bg: "e1fcce",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80",
        title: "FEATURED ROMPER",
        desc: "SOME SKIRT THING",
        bg: "e1f2fc",
    },
    {
        id: 4,
        img: "https://www.rlmedia.io/is/image/PoloGSI/s7-1173581_lifestyle?$rl_df_pdp_5_7_lif$",
        title: "SOCKS",
        desc: "WE KNOW YOU NEED THEM, YOU GOT HOLES IN YOURS, BUY THESE NOW!",
        bg: "fcece1",
    },
]

