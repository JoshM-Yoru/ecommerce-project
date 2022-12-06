import React from "react";
import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../Context/UserContext";
import { receipts } from "../../testReceipt";
import { UserContextState, User } from "../../Types/User";
import AccountDetails from "../AccountDetails/AccountDetails";
import PastOrders from "../PastOrders/PastOrders";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import ReceiptCard from "../ReceiptCard/ReceiptCard";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    margin-block: 50px;
`
const ReceiptWrapper = styled.div`
    margin-top: 10px;
    background-color: white;
    height: fit-content;
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
`
// const TitleContainer = styled.div`
//     background-color: #333;
//     width: 50vw;
//     display: flex;
//     padding-inline: 5px;
//     border-radius: 10px 10px 0 0;
// `
// const Title = styled.h1`
//     color: #ccc;
// `
// const NameContainer = styled.div`
//     display: flex;
//     border-bottom: 1px solid #ccc;
//     margin-bottom: 5px;
//     padding: 3px 0 8px;
// `
// const NameTitleContainer = styled.div`
//     width: 25vw;
//     padding: 0 0 0 10px;
// `
// const NameTitle = styled.h2`
// `
// const UserNameContainer = styled.div`
//     display: flex;
//     justify-content: right;
//     width: 25vw;
//     padding: 0 10px 0 0;
// `
// const UserName = styled.h3`
// `
// const ReceiptContainer = styled.div`
//     border-radius: 5px;
// `

export const UserProfile: React.FC<User> = ({
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {
    const { updateUser, removeUser, currentTab } = useContext(Context) as UserContextState;

    const editProfile = () => {
        updateUser(id);
    };

    const deleteProfile = () => {
        removeUser(id);
    };

    return (
        <Container>
            <Wrapper>
                <ProfileNavigation id={id} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} address={address} password={password} />
                {
                    (currentTab === '1') ?
                        <AccountDetails id={id} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} address={address} password={password} />
                        :
                        <ReceiptWrapper>
                            <PastOrders id={id} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} address={address} password={password} />
                        </ReceiptWrapper>
                }
                {/* <TitleContainer> */}
                {/*     <Title>Profile</Title> */}
                {/* </TitleContainer> */}
                {/* <NameContainer> */}
                {/*     <NameTitleContainer> */}
                {/*         <NameTitle>Name:</NameTitle> */}
                {/*     </NameTitleContainer> */}
                {/*     <UserNameContainer> */}
                {/*         <UserName>{firstName} {lastName}</UserName> */}
                {/*     </UserNameContainer> */}
                {/* </NameContainer> */}
                {/* <h3>{email}</h3> */}
                {/* <h3>{phoneNumber}</h3> */}
                {/* <h3>{address}</h3> */}
                {/* <ReceiptContainer> */}
                {/*     { */}
                {/*         receipts.map((receipt) => { */}
                {/*             if (id === receipt.userId) { */}
                {/*                 return ( */}
                {/*                     <ReceiptCard key={receipt.receiptId} items={receipt.items} userId={receipt.userId} receiptId={receipt.receiptId} date={receipt.date} /> */}
                {/*                 ) */}
                {/*             } */}
                {/*         }) */}
                {/*     } */}
                {/* </ReceiptContainer> */}
            </Wrapper>
        </Container>
    );
};
