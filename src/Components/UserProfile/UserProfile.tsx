import axios from "axios";
import React from "react";
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

export const UserProfile: React.FC<User> = ({
    userId: id,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
}) => {
    const { updateUser, removeUser, currentTab } = useContext(Context) as UserContextState;

    const [user, setUser] = useState<User>();
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();

    const getTheUser = async () => {
        try {
            const res = await axios.get('http://localhost:8000/users/user/' + id);
            setUser(await res.data);
            setError(false);
        } catch (e) {
            setError(true);
        }
    };

    const editProfile = () => {
        updateUser(id);
    };

    const deleteProfile = () => {
        removeUser(id);
    };

    return (
        <Container>
            <Wrapper>
                <ProfileNavigation userId={id} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} address={address} password={password} />
                {
                    (currentTab === '1') ?
                        <AccountDetails userId={id} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} address={address} password={password} />
                        :
                        <ReceiptWrapper>
                            <PastOrders userId={id} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} address={address} password={password} />
                        </ReceiptWrapper>
                }
            </Wrapper>
        </Container>
    );
};
