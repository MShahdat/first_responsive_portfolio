import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div id='footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
            <div>
                <h1 className='text-2xl md:text-5xl font-bold'> Contact</h1>
                <h2 className='text-sm md:text-xl font-semibold py-2'>Feel free to reach out</h2>
            </div>
            <ul className='text-sm md:text-xl'>
                <li className='flex gap-1 items-center'>
                    <MdOutlineEmail size={20}></MdOutlineEmail>
                    shahdat@gamil.com
                </li>
                <li className=' flex gap-1 items-center'>
                    <CiLinkedin ></CiLinkedin>
                    linkdin.com/Shadhat
                </li>
                <li className='flex gap-1 items-center'>
                    <FaGithub></FaGithub>
                    github.com/MShahdat
                </li>
            </ul>
        </div>
    );
};

export default Footer;