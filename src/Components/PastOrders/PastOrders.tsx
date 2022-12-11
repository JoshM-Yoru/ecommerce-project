import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { receipts } from '../../testReceipt'
import { Receipt } from '../../Types/Receipt'
import { User, UserContextState } from '../../Types/User'
import ReceiptCard from '../ReceiptCard/ReceiptCard'
import { Context } from '../../Context/UserContext';
import NoPastOrder from '../NoPastOrder/NoPastOrder'

const Container = styled.div`
    width: 600px;
`

const PastOrders: React.FC = () => {

    const { currentUser, updateCurrentUser } = useContext(Context) as UserContextState;

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
    console.log(receiptData)

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
