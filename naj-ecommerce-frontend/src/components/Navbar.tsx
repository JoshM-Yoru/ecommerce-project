import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductProvider';
import { ProductContextState } from '../types/Product';
import './CustomCSS.css';

const Navbar = () => {
    const { products, itemSearch } = useContext(ProductContext) as ProductContextState;

    // const navigate = useNavigate();
    // const navigateToHome = () => {
    //     navigate('/');
    //     window.scrollTo(0, 0);
    // }

    // const navigateToLogin = () => {
    //     if (localStorage.getItem("curUserL") === "true") {
    //         navigate('/profile');
    //     } else {
    //         navigate('/login');
    //     }
    //     window.scrollTo(0, 0);
    // }

    // const navigateToCart = () => {
    //     navigate('/cart');
    //     window.scrollTo(0, 0);
    // }

    // const navigateToShop = () => {
    //     navigate('/shop');
    //     window.scrollTo(0, 0);
    // }


    const updateCartAmount = (): number => {
        let itemsInCart = 0;
        for (let i: number = 0; i < products.length; i++) {
            itemsInCart += products[i].amount;
        }
        return itemsInCart;
    }

    let searchedProduct: string;

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        searchedProduct = e.currentTarget.value;
    }

    const ref = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        itemSearch(searchedProduct);
        if (ref.current !== null) {
            ref.current.value = '';
        }
        // navigateToShop();
    }

    return (
        <div className='z-10 h-24'>
            <div className='h-full py-3 px-6 flex justify-between items-center'>
                <div className='flex-1 flex items-center text-xs pl-4'>
                    <div className='border border-solid border-slate-100 rounded px-2 py-1 flex items-center'>
                        <input className='outline-none bg-transparent focus:outline-none focus:bg-transparent p-1' ref={ref} placeholder='Search' name='searchbar' onChange={handleChange} />
                        <button onClick={handleSubmit}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-slate-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='flex-1 flex justify-center h-full'>
                    <p className='logo'>NAJ</p>
                    <p className='logo-mirror'>NAJ</p>
                </div>
                <div className='flex-1 flex justify-end items-center pr-6'>
                    <div className='cursor-pointer ml-6' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 opacity-60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                    </div>
                    <div className='cursor-pointer ml-6' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 opacity-60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className='cursor-pointer relative p-0 ml-6'>
                        {
                            updateCartAmount() > 0 &&
                            <span className="absolute -right-2 -top-1 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white text-xs  leading-tight text-center">{updateCartAmount()}
                            </span>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 opacity-60">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
