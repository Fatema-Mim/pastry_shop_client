import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className="mx-auto mt-10 w-full max-w-md bg-white shadow-md rounded px-8  pb-8 mb-4">
                <p className='text-center text-3xl text-gray-700 font-bold pt-6 pb-3'>Registration</p>
                <form action='' className='pt-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Your Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" />
                    </div>
                    <div className="mb-6">
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
                            Register
                        </button>
                        <p>
                            <Link to="/login" className='text-purple-500 text-sm font-medium hover:text-purple-700'>Already Register?</Link>
                            
                        </p>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;