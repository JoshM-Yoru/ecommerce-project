import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter >
    )
}

export default App
