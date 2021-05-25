import React from 'react';
import { Link } from 'react-router-dom';

const BaseHeader = () => {
    return (
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-1">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <button
                                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                                <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span className="font-bold">Null Pointer</span>
                            </button>
                        </div>

                        <div className="hidden md:flex items-center space-x-1">
                            <Link to='/' className="py-2 px-3 text-gray-700 hover:text-gray-900 focus:outline-none">
                                Home
                            </Link>
                            <Link to='/Explore' className="py-2 px-3 text-gray-700 hover:text-gray-900 focus:outline-none">
                                Explore
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        <button className="py-2 px-3 text-gray-700 hover:text-gray-900 focus:outline-none">Login
                        </button>
                        <button
                            className="py-2 px-3 bg-yellow-400 rounded hover:bg-yellow-300 text-white hover: transition duration-300 focus:outline-none">
                            Signup
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/*fit for mobile*/}
            <div className="mobile-menu hidden md:hidden">
                <button className="block py-2 px-4 text-sm hover:bg-gray-200">HOME</button>
                <button className="block py-2 px-4 text-sm hover:bg-gray-200">EXPLORE</button>
            </div>
        </nav>
    );
}

export default BaseHeader;
