import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { ProductContext } from '../../context/ProductProvider'
import { UserContext } from '../../context/UserProvider'
import { ProductContextState } from '../../types/Product'
import { UserContextState } from '../../types/User'

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
    /* animation: ${textAppear} 1s; */
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

    const { currentTab, updateAccountTab, logoutUser, currentUser, updateCurrentUser } = useContext(UserContext) as UserContextState;
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <TabText>
                    Account Details
                </TabText>
            </Tabs>
            <Tabs id='2' disabled={currentTab === '2'} onClick={handleTabClick} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <TabText>
                    Past Orders
                </TabText>
            </Tabs>
            <Tabs>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <TabText onClick={handleSignOut}>
                    Sign Out
                </TabText>
            </Tabs>
        </Container>
    )
}

export default ProfileNavigation
