import React from 'react'
import Laptop from '../assets/Laptop.jpg'
import Laptop2 from '../assets/Laptop2.jpg'

const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-6'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 justify-center'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#df0095] font-bold text-2xl'>Data Analysis</p>
                <h1 className='md:text-3xl text-xl font-bold'>We Deliver top-notch Services</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis blanditiis 
                    excepturi quos incidunt dolor voluptatum laudantium et quisquam qui, 
                    exercitationem praesentium voluptates repellat vero maxime enim 
                    aliquid earum assumenda officiis?
                </p>
                <button className='bg-black text-[#df0095] p-4 my-4 md:mx-0 mx-auto rounded-lg w-[200px]'>Learn More</button>
            </div>
            <img className='w-[500px] mx-3 my-6' src={Laptop2} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#df0095] font-bold text-2xl'>Software Development</p>
                <h1 className='md:text-3xl text-xl font-bold'>We never compromise on quality</h1>
                <p>
                    We deliver outstanding software Development to all our clients and also train
                    people to becoming professions in the field of technology
                </p>
                <button className='bg-black text-[#df0095] p-4 my-4 md:mx-0 mx-auto rounded-lg w-[200px]'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics