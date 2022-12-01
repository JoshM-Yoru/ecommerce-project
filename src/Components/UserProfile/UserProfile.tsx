import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../Context/UserContext";
import { receipts } from "../../testReceipt";
import { UserContextState, User } from "../../Types/User";
import ReceiptCard from "../ReceiptCard/ReceiptCard";

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleContainer = styled.div`
    background-color: #333;
    width: 50vw;
    display: flex;
    padding-inline: 5px;
    border-radius: 10px 10px 0 0;
`
const Title = styled.h1`
    color: #ccc;
`
const NameContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    padding: 3px 0 8px;
`
const NameTitleContainer = styled.div`
    width: 25vw;
    padding: 0 0 0 10px;
`
const NameTitle = styled.h2`
`
const UserNameContainer = styled.div`
    display: flex;
    justify-content: right;
    width: 25vw;
    padding: 0 10px 0 0;
`
const UserName = styled.h3`
`
const ReceiptContainer = styled.div`
    border-radius: 5px;
`

export const UserProfile: React.FC<User> = ({
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {
    const { updateUser, removeUser } = useContext(Context) as UserContextState;

    const editProfile = () => {
        updateUser(id);
    };

    const deleteProfile = () => {
        removeUser(id);
    };

    return (
        <Container>
            <Wrapper>
                <TitleContainer>
                    <Title>Profile</Title>
                </TitleContainer>
                <NameContainer>
                    <NameTitleContainer>
                        <NameTitle>Name:</NameTitle>
                    </NameTitleContainer>
                    <UserNameContainer>
                        <UserName>{firstName} {lastName}</UserName>
                    </UserNameContainer>
                </NameContainer>
                <h3>{email}</h3>
                <h3>{phoneNumber}</h3>
                <h3>{address}</h3>
                <ReceiptContainer>
                    {
                        receipts.map((receipt) => {
                            if (id === receipt.userId) {
                                return (
                                    <ReceiptCard key={receipt.receiptId} items={receipt.items} userId={receipt.userId} receiptId={receipt.receiptId} date={receipt.date} />
                                )
                            }
                        })
                    }
                </ReceiptContainer>
            </Wrapper>
        </Container>
    );
};
