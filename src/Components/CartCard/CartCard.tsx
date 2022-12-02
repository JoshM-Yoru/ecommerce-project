import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/ProductContext'
import { Product, ProductContextState } from '../../Types/Product'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #ccc;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-end;
    margin: 10px;
    width: 100%;
    padding-inline: 20px;
`
const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
`
const ImageContainer = styled.div`
    height: 80px;
    flex: 1;
`
const Image = styled.img`
    height: 100%;
    /* position: absolute; */
`
const Title = styled.div`
    padding-top: 5px;
    font-size: 14px;
    margin-bottom: 10px;
`
const CostWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Price = styled.p`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5px;
    margin-left: -10px;
`
const Amount = styled.p`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const AdjustContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Minus = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`
const Plus = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`

const CartCard: React.FC<Product> = ({ productId, img, title, desc, price, amount, itemOrder }) => {

    const { itemsInCart, updateAmount, removeProductFromCart } = useContext(Context) as ProductContextState;

    const decrementItem = () => {
        itemsInCart(-1);
        updateAmount(productId, -1);
    }
    const incrementItem = () => {
        itemsInCart(1);
        updateAmount(productId, 1);
    }
    const deleteItem = () => {
        removeProductFromCart(productId);
    }

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={img} />
                </ImageContainer>
                <DescriptionWrapper>
                    <Title>{title}</Title>
                    <CostWrapper>
                        <Price>${price.toFixed(2)}</Price>
                        <Amount>x {amount}</Amount>
                        <AdjustContainer>
                            <Plus onClick={incrementItem}><ArrowDropUpIcon style={{ marginBottom: '5px', padding: '0' }} /></Plus>
                            <Minus onClick={decrementItem}><ArrowDropDownIcon /></Minus>
                        </AdjustContainer>
                    </CostWrapper>
                </DescriptionWrapper>
                <DeleteOutlineIcon style={{ color: 'red', cursor: 'pointer' }} onClick={deleteItem} />
            </Wrapper>
        </Container>
    )
}

export default CartCard
