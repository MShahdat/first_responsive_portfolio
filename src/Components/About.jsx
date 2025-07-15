import React from 'react';
import { ArrowRight } from 'lucide-react'; // optional icon lib, or use emoji

const About = () => {
  return (
    <div id='about' className='bg-[#0f172a] text-white rounded-xl mx-4 md:mx-20 my-10 shadow-lg p-6 md:p-12'>
      <h2 className='text-2xl md:text-4xl font-bold mb-8'>About</h2>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        {/* Left Image */}
        <div className='flex-shrink-0'>
          <img src='/src/Images/sxfdsdf.jpg' alt='Developer at desk' className='h-64 md:h-80' />
        </div>

        {/* Right Content */}
        <div className='space-y-8'>
          {/* Frontend */}
          {/* Backend */}
          <div className='flex items-start gap-3'>
            <ArrowRight className='mt-1' />
            <div>
              <h3 className='text-xl md:text-2xl font-semibold'>Frontend developer</h3>
              <p className='text-sm md:text-base text-gray-300 mt-1 leading-snug'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis.
              </p>
            </div>
          </div>

          {/* Database */}
          <div className='flex items-start gap-3'>
            <ArrowRight className='mt-1' />
            <div>
              <h3 className='text-xl md:text-2xl font-semibold'>Database developer</h3>
              <p className='text-sm md:text-base text-gray-300 mt-1 leading-snug'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores.
              </p>
            </div>
          </div>

          {/* Backend */}
          <div className='flex items-start gap-3'>
            <ArrowRight className='mt-1' />
            <div>
              <h3 className='text-xl md:text-2xl font-semibold'>Backend developer</h3>
              <p className='text-sm md:text-base text-gray-300 mt-1 leading-snug'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores explicabo deserunt asperiores quasi, vitae blanditiis perferendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
