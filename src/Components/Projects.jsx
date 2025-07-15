import React from 'react';
import Cart from './Cart';

const Projects = () => {
    return (
        <div id='projects' className='p-10 md:p-24 text-white'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
            <div className='py-12 px-30 flex flex-wrap gap-15'>
                <Cart title = {'Md shahdat'} main = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a '}></Cart>
                <Cart title = {'Sheikh Ridoy'} main = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a '}></Cart>
                <Cart title = {'Kamrul Hasan'} main = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a '}></Cart>
            </div>
        </div>
    );
};

export default Projects;