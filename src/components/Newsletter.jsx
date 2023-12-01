import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4 bg-[#2c1d61] text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='font-bold text-2xl md:text-4xl sm:text-3xl py-2'>Want Updates on our Latest Development?</h1>
                <p className='font-medium'>Sign up on our newsletter and stay very much updated</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center jusify-center w-full'>
                    <input className='p-3 rounded-md flex w-full text-black' type="text" placeholder='Enter your Email Address' />
                    <button className='bg-[#df0095] w-[200px] mx-auto my-6 py-3 ml-4 rounded-md font-medium text-black'>Notify Me</button>
                </div>
                <p>
                    We care about the protection of your data. Read our <span className='text-[#df0095]'><a href="/">Privacy Policy.</a></span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter