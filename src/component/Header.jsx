import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-purple-100'>
            <div className='container mx-auto px-16 py-6 flex justify-between'>
                <p>PastyShop</p>
                <ul className='flex space-x-4'>
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                    <li> 
                        <Link to="/">About</Link>
                    </li>
                    <li> 
                        <Link to="/">Menu</Link>
                    </li>
                    <li> 
                        <Link to="/">Reviews</Link>
                    </li>
                    <li className='bg-purple-500 hover:bg-purple-700 px-2 py-1 rounded-sm text-white'>
                        <Link to="/login">Login</Link>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;