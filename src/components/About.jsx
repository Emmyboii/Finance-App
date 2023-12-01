import React from 'react';
import Typed from 'react-typed';

const About = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full mx-auto h-screen flex flex-col justify-center text-center'>
            <p className='text-[#df0095] font-bold p-2 text-2xl'>Code With EmmyBoi</p>
            <h1 className='font-bold md:text-6xl sm:text-5xl text-3xl md:py-6'>Making Web Development Interesting for</h1>
            <div>
                <Typed 
                className='md:text-4xl sm:text-2xl text-xl font-bold text-gray-800'
                strings={['You', 'for I', 'and for Everyone']}
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <p className='md:text-3xl sm: 2xl text-xl text-gray-500 py-2'>We are very Reliable and we'll make you a web pro</p>
            <button className='bg-[#df0095] w-[200px] mx-auto my-6 p-4 rounded-md font-medium text-black'>Let's Get Started</button>
        </div>
    </div>
  )
}

export default About