import React from 'react'
import {ExperienceData} from "../data.js";


function  Experience (){
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
       <div>
        <h1 className='text-3xl font-bold'>Experience</h1>
        <p className='my-3'>I have more than 2 years of experience
             in below technology</p>
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-4 gap-14 my-5'>
        {
            ExperienceData.map(({id,name,logo}) => (
                <div key={id} className='flex flex-col justify-center items-center px-3 sm:w-[200px] sm:h-[200px] cursor-pointer hover:scale-110 duration-300 '>
                 <img src={logo} className='w-[120x] rounded-full border-[3px]' alt="" />
                 <div>
                    <div className='font-bold text-lg mb-2'>{name}</div>
                 </div>
                </div>
            ))

        }
       </div>
    </div>
  )
}

export default Experience
