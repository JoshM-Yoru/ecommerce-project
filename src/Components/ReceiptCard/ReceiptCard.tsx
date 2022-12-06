import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Items, Receipt } from '../../Types/Receipt'

const textAppear = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%},
`
const Container = styled.div`
    background: white;
    animation: ${textAppear} 1s;
`
const Wrapper = styled.div`
    padding: 10px;
`
const Header = styled.div`
    padding: 10px;
    display: flex;
`
const Title = styled.h4`
    flex: 1;
`
const ReceiptDate = styled.h4`
`
const ReceiptBody = styled.div`
    display: flex;
    padding: 10px;
    font-size: 14px;
    background: white;
`
const ItemsList = styled.ul`
    list-style-type: none;
    flex: 1;
`
const TotalPrice = styled.div`
    
`

const ReceiptCard: React.FC<Receipt> = ({ items, userId, receiptId, date }) => {

    const totalPrice = (items: Items[]) => {
        let total = 0;
        for (let i: number = 0; i < items.length; i++) {
            total += items[i].amount * items[i].price;
            console.log(total)
        }
        return total;
    }

    return (
        <Container>
            <Wrapper>
                <Header>
                    <Title>Receipt ID: {receiptId}</Title>
                    <ReceiptDate>{date}</ReceiptDate>
                </Header>
                <ReceiptBody>
                    <ItemsList>
                        {
                            items.map((item, index) => {
                                return (
                                    <li key={index} >{item.amount} x {item.title}</li>
                                )
                            })
                        }
                    </ItemsList>
                    <TotalPrice>
                        Total Price: ${totalPrice(items)}
                    </TotalPrice>
                </ReceiptBody>
            </Wrapper>
        </Container>
    )
}

export default ReceiptCard
