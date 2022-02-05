import React from 'react';


const Banner = () => {
    return (
        <div className='container mx-auto px-16 py-24 bg-banner2 w-full  bg-cover bg-center bg-no-repeat text-center'>
           <p className='text-5xl text-yellow-700 pb-3'>Pasty Shop</p>
           <p className='text-xl capitalize py-1 tracking-wider'> Best Choice for your sweets</p> 
            <p className='text-xl capitalize py-1 tracking-wider'>What Are You Waiting For ?</p>
            <p className='text-4xl capitalize py-2 tracking-wider'>Order Now</p>
            <p className='text-2xl font-bold tracking-wider'>019224455</p>
        </div>
    );
};

export default Banner;