import React from 'react'

const Footer = () => {
    return (
        <div className='h-12 w-full z-10 absolute'>
            <div className='h-full py-3 px-6 flex justify-between items-center'>
                <div className='flex-1 flex ml-4 items-center animate-slideInFromLeft'>
                    ©NAJ Clothing
                </div>
                <div className='flex mr-4 items-center animate-slideInFromRight'>
                    <div className='ml-8 flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <div className='ml-4 flex items-center'>888-888-8888</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
                        // <LocalPhoneIcon style={{ color: "gray" }} />
