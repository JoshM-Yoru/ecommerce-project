import React, { useState } from 'react'
import styled from 'styled-components'
import { products } from '../../data'
import ProductCard from '../ProductCard/ProductCard'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Container = styled.div`
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    flex-wrap: wrap;
    width: 80%;
`
const UpArrowWrapper = styled.div`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    z-index: 2;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10%;
    right: 5%;
    cursor: pointer;
`

const ProductLayout: React.FC = () => {

    window.scrollTo();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible)

    return (
        <Container>
            <Wrapper>
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={product.productId} productId={product.productId} img={product.img} title={product.title} desc={product.desc} price={product.price} amount={1} />
                        );
                    })
                }
                <UpArrowWrapper onClick={handleScrollToTop}>
                    <KeyboardArrowUpIcon style={{ zIndex: '2', fontSize: '2em', backgroundColor: '#ccc', borderRadius: '50%', color: 'gray', display: visible ? 'inline' : 'none' }} />
                </UpArrowWrapper>
            </Wrapper>
        </Container>
    )
}

export default ProductLayout
