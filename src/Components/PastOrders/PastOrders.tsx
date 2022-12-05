import React from 'react'
import styled from 'styled-components'
import { receipts } from '../../testReceipt'
import { User } from '../../Types/User'
import ReceiptCard from '../ReceiptCard/ReceiptCard'

const Container = styled.div`
    width: 600px;
`

const PastOrders: React.FC<User> = ({
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {
    return (
        <Container>
            {
                receipts.map((receipt) => {
                    if (id === receipt.userId) {
                        return (
                            <ReceiptCard key={receipt.receiptId} items={receipt.items} userId={receipt.userId} receiptId={receipt.receiptId} date={receipt.date} />
                        )
                    }
                })
            }
        </Container>
    )
}

export default PastOrders
