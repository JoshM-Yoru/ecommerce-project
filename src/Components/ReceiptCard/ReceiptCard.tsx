import React from 'react'
import styled from 'styled-components'
import { Items, Receipt } from '../../Types/Receipt'

const Container = styled.div`
    width: 40vw;
    background: #bbb;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.3);
`
const Header = styled.div`
    background: #444;
    color: #ccc;
    padding: 15px 5px 3px;
    border-radius: 5px 5px 0 0;
    display: flex;
`
const Title = styled.h4`
    flex: 1;
`
const ReceiptDate = styled.h4`
`
const ReceiptBody = styled.div`
    display: flex;
    padding: 30px;
    font-size: 12px;
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
        </Container>
    )
}

export default ReceiptCard
