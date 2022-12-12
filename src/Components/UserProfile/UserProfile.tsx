import axios from "axios";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Context } from "../../Context/UserContext";
import { UserContextState, User } from "../../Types/User";
import AccountDetails from "../AccountDetails/AccountDetails";
import PastOrders from "../PastOrders/PastOrders";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import UpdateModal from "../UpdateModal/UpdateModal";

const textAppear = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%},
`
const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overflow: scroll;
    animation: ${textAppear} 1s;
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
    const { currentTab, updateCurrentUser, currentUser, modal } = useContext(Context) as UserContextState;

    useEffect(() => {
        updateCurrentUser(currentUser)
    }, [])

    const id: number = Number(localStorage.getItem('curUserI'));
    const log = localStorage.getItem("curUserL");

    // const getTheUser = async () => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        try {
            axios.get<User>(
                'http://localhost:8000/users/user',
                {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                    params: { id: id }
                }
            ).then(res => {
                let tuser = res.data;
                if (tuser) {
                    updateCurrentUser(tuser);
                    setLoading(false);
                    console.log(tuser)
                }
            })
        } catch (e) {
        }
    }, [])

    // if (modal) {
    //     return <UpdateModal />
    // }

    if (loading) {
        return <Container />
    }

    return (
        <>
            {modal ? <UpdateModal /> : null}
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
        </>
    );
};
