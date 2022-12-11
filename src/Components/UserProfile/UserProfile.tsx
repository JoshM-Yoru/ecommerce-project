import axios from "axios";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overflow: scroll;
`
const Wrapper = styled.div`
    display: flex;
    margin-block: 50px;
    height: fit-content;
`
const ReceiptWrapper = styled.div`
    margin-top: 10px;
    background-color: ${(props) => props.theme.background};
    height: fit-content;
    box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
`

export const UserProfile: React.FC = () => {
    const { currentTab, updateCurrentUser, currentUser } = useContext(Context) as UserContextState;

    const id: number = Number(localStorage.getItem('curUserI'));
    const log = localStorage.getItem("curUserL");

    const getTheUser = async () => {

        try {
            let res = await axios.get<User>(
                'http://localhost:8000/users/user',
                {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                    params: { id: id }
                }
            );
            let tuser = res.data;
            if (tuser) {
                updateCurrentUser(tuser);
                console.log(tuser)
            }
        } catch (e) {
        }
    };

    if (currentUser.userId === 0) {
        getTheUser();
    }


    useEffect(() => {
        updateCurrentUser(currentUser)
    }, [])

    return (
        <Container>
            <Wrapper>
                <ProfileNavigation />
                {
                    (currentTab === '1') ?
                        <AccountDetails />
                        :
                        <ReceiptWrapper>
                            <PastOrders />
                        </ReceiptWrapper>
                }
            </Wrapper>
        </Container>
    );
};
