import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { receipts } from '../../testReceipt'
import { Receipt } from '../../Types/Receipt'
import { User } from '../../Types/User'
import ReceiptCard from '../ReceiptCard/ReceiptCard'

const Container = styled.div`
    width: 600px;
`

const PastOrders: React.FC<User> = ({
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {

    const [receiptData, setReceiptData] = useState<Receipt[]>([])

    async function getReceipts() {
        try {

            const { data } = await axios.get<Receipt[]>(
                'http://localhost:8000/receipts/readuser',
                {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                    params: { id: userId }
                }
            )

            setReceiptData(data)
            console.log("---------------THIS IS THE RECEIPT DATA-----------------")
            console.log(receiptData)

            return;

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

    useEffect(() => {
        getReceipts();
    }, [])

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return (
        <Container>
            {
                receiptData.map((receipt) => {
                    if (userId === receipt.userId) {
                        return (
                            <ReceiptCard key={receipt.receiptNumber} items={receipt.items} userId={receipt.userId} receiptNumber={receipt.receiptNumber} dateTime={receipt.dateTime} total={Math.round(receipt.total * 100) / 100} />
                        )
                    }
                })
            }
        </Container>
    )
}

export default PastOrders
