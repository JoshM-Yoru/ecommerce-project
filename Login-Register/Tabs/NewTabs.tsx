import React, { useState } from 'react';
import { LoginForm } from '../Forms/LoginForm';
import { RegisterForm } from '../Forms/RegisterForm';
import './NewTabs.css';


const NewTabs = () => {
 
    const[currentTab, setCurrentTab] = useState('1');
    const tabs =[
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

 const handleTabClick = (e:React.MouseEvent) =>{
    if(currentTab === '1'){
        setCurrentTab('2');
    }else{setCurrentTab('1')}
 }


 if(currentTab === '1'){

    return(
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) => 
                <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                <LoginForm></LoginForm>
            </div>
        </div>
     );

 }else{
    return(
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) => 
                <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                <RegisterForm/>
            </div>
        </div>
     );
 }





}

export default NewTabs;