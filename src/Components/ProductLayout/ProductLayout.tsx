import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Product } from '../../Types/Product';
import ProductCard from '../ProductCard/ProductCard'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Context } from '../../Context/ProductContext'
import { ProductContextState } from '../../Types/Product';
import axios from 'axios';

const Container = styled.div`
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    overflow: scroll;
    height: 100vh;
    padding-bottom: 100px;
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

    const [productData, setProductData] = useState<Product[]>([]);

    async function getProducts() {
        try {
            const {data} = await axios.get<Product[]>(
                'http://localhost:8000/items/read/all',
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            )

            return setProductData(data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
              console.log('error message: ', error.message);
              return error.message;
            } else {
              console.log('unexpected error: ', error);
              return 'An unexpected error occurred';
            }
          }
    }

    useEffect(()=> {
        getProducts()
    }, [])

    const { search } = useContext(Context) as ProductContextState;

    window.addEventListener('scroll', toggleVisible)

    return (
        <Container>
            <Wrapper>
                {
                    (search === '') ?
                        productData.map((product) => {
                            return (
                                <ProductCard key={product.itemId} itemId={product.itemId} imageUrl={product.imageUrl} name={product.name} description={product.description} price={product.price} amount={1} />
                            );
                        })
                        :
                        productData.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())).map(product => {
                            return (
                                <ProductCard key={product.itemId} itemId={product.itemId} imageUrl={product.imageUrl} name={product.name} description={product.description} price={product.price} amount={1} />
                            )
                        })
                }
                <UpArrowWrapper onClick={handleScrollToTop}>
                    <KeyboardArrowUpIcon style={{ zIndex: '2', fontSize: '2.5em', backgroundColor: '#ccc', borderRadius: '50%', color: 'gray', display: visible ? 'inline' : 'none' }} />
                </UpArrowWrapper>
            </Wrapper>
        </Container >
    )
}

export default ProductLayout
