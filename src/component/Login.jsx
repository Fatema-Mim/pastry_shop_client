import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <div>
            <div className="mx-auto mt-16 w-full max-w-md bg-white shadow-md rounded px-8  pb-8 mb-4">
                <p className='text-center text-3xl text-gray-700 font-bold pb-3 pt-8'>Login</p>
                <form action='' className='pt-6'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="emailAddress">
                            Email Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emailAddress" type="text" placeholder="Email Address" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <p className='group'>
                            <Link to="/registration" className='text-purple-500 text-sm font-medium hover:text-purple-700'>New Register</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block fill-purple-500 group-hover:fill-purple-700" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </p>
                        
                    </div>
                </form>
            </div>
        
        </div>
    );
};

export default login;