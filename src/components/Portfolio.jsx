import React from 'react'
import {CardItems} from "../data.js";


const Portfolio = () => {
  return (
    <div name = "Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
       <div>
        <h1 className='text-3xl font-bold' >Portfolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
       </div>
       <div className='grid grid-cols-1 sm:grid-cols-4 gap-14 my-5'>
        {
            CardItems.map(({id,name,img,description}) => (
                <div key={id} className='sm:w-[300px] sm:h-[350px] border-[2px] rounded-lg shadow-lg px-3 cursor-pointer hover:scale-110 duration-300 '>
                 <img src={img} className='w-[120x] h-[120px] px-1 rounded-full border-[2px]' alt="" />
                 <div>
                    <div className='font-bold text-lg mb-2'>{name}</div>
                    <p>{description}</p>
                 </div>
                 <div className='flex justify-around px-3 py-2 space-x-4'>
                    <button className='bg-blue-700 hover:bg-blue-700 hover:scale-110 duration-200 font-bold rounded text-white text-lg px-3 py-2'>Video</button>
                    <button className='bg-green-700 hover:bg-green-700 hover:scale-110 duration-200 font-bold rounded text-white text-lg px-3 py-2'>Source Code</button>
                 </div>
                </div>
            ))

        }
       </div>
    </div>
  )
}

export default Portfolio
