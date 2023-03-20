import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Cart from './components/checkout/Cart'
import CheckoutCompleted from './components/checkout/CheckoutCompleted'
import Footer from './components/Footer'
import Slider from './components/home/Slider'
import Navbar from './components/Navbar'
import Login from './components/profile/Login'
import { UserProfile } from './components/profile/UserProfile'
import ProductLayout from './components/shop/ProductLayout'
import ProductProvider from './context/ProductProvider'
import { UserProvider } from './context/UserProvider'

function App() {

    return (
        <BrowserRouter>
            <UserProvider>
                <ProductProvider>
                    <div className='flex flex-col h-screen'>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Slider />} />
                            <Route path='/shop' element={<ProductLayout />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/success' element={<CheckoutCompleted />} />
                            <Route path='/profile' element={<UserProfile />} />
                        </Routes>
                        <Footer />
                    </div>
                </ProductProvider>
            </UserProvider>
        </BrowserRouter>
    )
}

export default App
