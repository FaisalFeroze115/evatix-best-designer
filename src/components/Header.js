import React from 'react'

const Header = () => {
    return (
        <div className="header_container lg:px-40 py-3 border-b border-white-100 md:px-20 sm:px-10 px-10">
            <div class="grid grid-cols-3 gap-4 justify-center items-center">
                <div> <img src="/images/logo_white.png"/> </div>
                <div className="justify-center gap-x-5 hidden sm:hidden md:hidden lg:flex">
                    <p className="text-white font-bold">Home</p>
                    <p className="text-white">Portfolio</p>
                </div>
                <div className="justify-end hidden sm:hidden md:hidden lg:flex">
                    <button className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border-none rounded">
                        HIRE ME
                    </button>
                </div>

                <div className="lg:hidden"></div>

                <div className="lg:hidden flex justify-end">
                    <button className="text-white border border-white-500 rounded px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
