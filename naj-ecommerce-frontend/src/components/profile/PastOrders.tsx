import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../context/UserProvider'
import { Receipt } from '../../types/Receipt'
import { UserContextState } from '../../types/User'
import NoPastOrder from './NoPastOrder'
import ReceiptCard from './ReceiptCard'

const Container = styled.div`
    width: 600px;
`

const PastOrders: React.FC = () => {

    const { currentUser, updateCurrentUser } = useContext(UserContext) as UserContextState;

    const [receiptData, setReceiptData] = useState<Receipt[]>([])

    async function getReceipts() {
        try {

            const { data } = await axios.get<Receipt[]>(
                'http://localhost:8000/receipts/readuser',
                {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                    params: { id: currentUser.userId }
                }
            )

            setReceiptData(data)

            return;

        } catch (error) {
            if (axios.isAxiosError(error)) {

                return error.message;
            } else {
                return 'An unexpected error occurred';
            }
        }
    }

    useEffect(() => {
        getReceipts();
    }, [])
    let user = localStorage.getItem('curUserI');

    return (
        <Container>
            {
                receiptData.length !== 0 ?
                    receiptData.map((receipt) => {
                        if (currentUser.userId.toString() === user) {
                            return (
                                <ReceiptCard key={receipt.receiptNumer} items={receipt.items} userId={receipt.userId} receiptNumer={receipt.receiptNumer} dateTime={receipt.dateTime} total={Math.round(receipt.total * 100) / 100} />
                            )
                        }
                    })
                    :
                    <NoPastOrder />
            }
        </Container>
    )
}

export default PastOrders
