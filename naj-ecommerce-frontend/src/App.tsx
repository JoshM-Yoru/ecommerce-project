import './App.css'
import Footer from './components/Footer'
import Slider from './components/home/Slider'
import Navbar from './components/Navbar'
import ProductProvider from './context/ProductProvider'
import { UserProvider } from './context/UserProvider'

function App() {

    return (
        <UserProvider>
            <ProductProvider>
                <Navbar />
                <Slider />
                <Footer />
            </ProductProvider>
        </UserProvider>
    )
}

export default App
