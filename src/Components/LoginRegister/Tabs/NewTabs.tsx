import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginForm } from '../Forms/LoginForm';
import { RegisterForm } from '../Forms/RegisterForm';
// import './NewTabs.css';

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 400px;
    margin-top: 50px;
    padding: 5px;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
`
const Tabs = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    border-radius: 10px;
`
const TabButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 5px;
    width: 100%;
    text-decoration: none;
    background: white;
    &:disabled {
        background: white;
        border-bottom: 2px solid blue;
    }
`
const Content = styled.div`
    height: 100%;
    background-color: white;
    border-top: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NewTabs: React.FC = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: '1',
            tabTitle: 'Login',
            title: 'Login',
        },
        {
            id: '2',
            tabTitle: 'Register',
            title: 'Register',
            content: ''
        }
    ];

    const handleTabClick = (e: React.MouseEvent) => {
        if (currentTab === '1') {
            setCurrentTab('2');
        } else { setCurrentTab('1') }
    }


    if (currentTab === '1') {

        return (
            <Container>
                <Wrapper style={{ height: '400px' }}>
                    <Tabs>
                        {tabs.map((tab, i) =>
                            <TabButton key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</TabButton>
                        )}
                    </Tabs>
                    <Content style={{ height: '200px' }}>
                        <LoginForm></LoginForm>
                    </Content>
                </Wrapper>
            </Container>
        );

    } else {
        return (
            <Container>
                <Wrapper style={{ height: '500px' }} >
                    <Tabs>
                        {tabs.map((tab, i) =>
                            <TabButton key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</TabButton>
                        )}
                    </Tabs>
                    <Content style={{ height: '300px' }}>
                        <RegisterForm />
                    </Content>
                </Wrapper>
            </Container>
        );
    }





}

export default NewTabs;
