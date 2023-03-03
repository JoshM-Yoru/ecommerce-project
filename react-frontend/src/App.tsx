import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ProductProvider from './Context/ProductContext';
import { UserProvider } from './Context/UserContext';

const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <ProductProvider>
                    <Home />
                </ProductProvider>
            </UserProvider>
        </BrowserRouter >
    )
}

export default App
