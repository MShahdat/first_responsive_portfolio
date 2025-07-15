import React from 'react';
import Name from './Name';

const Home = () => {
    return (
        <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
            <div className='md:w-2/4 md:pt-10'>
                <h1 className='text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter'> 
                    <Name></Name>
                </h1>
                <p className=' text-sm md:text-xl tracking-tight'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.!</p>
                <a href='#footer'>
                    <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-100 font-semibold rounded-3xl bg-[#465697]'> Contact Me </button>
                </a>
                
            </div>
            
        </div>
    );
};

export default Home;