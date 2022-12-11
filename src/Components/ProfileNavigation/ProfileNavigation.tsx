import React, { useContext, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { User, UserContextState } from '../../Types/User'
import { Context as UserContext } from "../../Context/UserContext";
import { Context as ProductContext } from "../../Context/ProductContext";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
import { ProductContextState } from '../../Types/Product';

const textAppear = keyframes`
    0% {opacity: 0%},
    100% {opacity: 100%},
`
const Container = styled.div`
    margin-right: 20px;
`
const Greeting = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.body};
    padding: 30px 10px 30px;
    margin:10px;
    box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
    animation: ${textAppear} 1s;
`
const GreetingIcon = styled.div`
    background-color: ${(props) => props.theme.altColor};
    padding: 25px;
    border-radius: 50%;
`
const GreetingInitials = styled.p`
    font-size: 3.5em;
    font-weight: bold;
    color: white;
`
const GreetingName = styled.div`
    padding: 10px;
`
const Hi = styled.p`
    font-size: 18px;
    letter-spacing: 2px;
`
const Name = styled.p`
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 3px;
`
const Tabs = styled.button`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    display: flex;
    width: 350px;
    padding: 10px;
    margin:10px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
    animation: ${textAppear} 1s;
    &:disabled {
        border-left: 5px solid #6bc5f2;
    };
`
const TabText = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 30px;
`

const ProfileNavigation: React.FC = () => {

    const { updateUser, removeUser, currentTab, updateAccountTab, logoutUser, currentUser } = useContext(UserContext) as UserContextState;
    const { removeAllProductsFromCart } = useContext(ProductContext) as ProductContextState;


    const handleTabClick = (e: React.MouseEvent) => {
        updateAccountTab();
    }

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.clear();
        removeAllProductsFromCart();
        logoutUser();
        navigate('/');
    }

    return (
        <Container>
            <Greeting>
                <GreetingIcon>
                    <GreetingInitials>{currentUser.firstName[0].toUpperCase()}{currentUser.lastName[0].toUpperCase()}</GreetingInitials>
                </GreetingIcon>
                <GreetingName>
                    <Hi>Hi,</Hi>
                    <br />
                    <Name>
                        {currentUser.firstName[0].toUpperCase() + currentUser.firstName.slice(1)} {currentUser.lastName[0].toUpperCase() + currentUser.lastName.slice(1)}
                    </Name>
                </GreetingName>
            </Greeting>
            <Tabs id='1' disabled={currentTab === '1'} onClick={handleTabClick} >
                <Person2OutlinedIcon style={{ fontSize: '2em' }} />
                <TabText>
                    Account Details
                </TabText>
            </Tabs>
            <Tabs id='2' disabled={currentTab === '2'} onClick={handleTabClick} >
                <FormatListBulletedOutlinedIcon style={{ fontSize: '2em' }} />
                <TabText>
                    Past Orders
                </TabText>
            </Tabs>
            <Tabs>
                <LogoutOutlinedIcon style={{ fontSize: '2em' }} />
                <TabText onClick={handleSignOut}>
                    Sign Out
                </TabText>
            </Tabs>
        </Container>
    )
}

export default ProfileNavigation
