import React from 'react'
import Img2 from "../../public/logo2.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
    <div className='flex flex-col sm:flex-row'>
    <div className='md:w-1/2 mt-16 sm:mt-24 space-y-2 order-2 md:order-1'>
     <span className='text-lg'>Welcome In My Feed</span>
    <div className='flex text-2xl space-x-1 sm:text-4xl'>
     <h1>Hello, I'm a <span className='ml-1'></span>
    {/* <span className='text-red-600'>Developer</span> */}
    <ReactTyped className='text-red-600'
     strings={["Developer","Programmer","Coder"]}
     typeSpeed={40}
     backSpeed={50}
     loop={true}
     />
    </h1>
    </div> <br/>

    <p className='text-sm md:text-md text-justify '>
        All of you Welcome to my Portfolio. This is the only one that is 
        handle by Bhoraj Malla Thakuri officially.
    </p> <br />

      {/* Social Icons */}
      <div className='flex flex-col items-center sm:flex-row justify-between space-y-9 sm:space-y-0 '> 
      <div className='space-y-2'>
        <h1 className='font-bold'>Availabe On</h1>
        <ul className='flex space-x-4'>
            <li>
              <a href='https://www.facebook.com/' target='_blank'>     
              <FaFacebook className='text-xl cursor-pointer' />
              </a>
              </li>
              <li>
              <a href='https://youtube.com/' target='_blank'>     
              <FaYoutube className='text-xl cursor-pointer' />
              </a>
              </li>
              <li>
              <a href='https://www.x.com/'>     
              <FaXTwitter className='text-xl cursor-pointer' />
              </a>
              </li>

              <li>
                <a href='https://github.com/' target='_blank'>
              <FaGithub className='text-xl cursor-pointer' />
            </a>
            </li>    
        </ul>   
      </div>

        {/* Currenty Woring On */}
        <div className='space-y-2'>
        <h1 className='font-bold'>Currently Working On</h1>
        <ul className='flex space-x-4'>
            <DiMongodb className='text-xl sm:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
            <SiExpress className='text-xl sm:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
            <FaReact className='text-xl sm:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
            <FaNodeJs className='text-xl sm:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
        </ul> 
        </div>
      </div>

    </div>
    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-7 order-1 justify-center items-center '>
     <img src={Img2} alt='image' className='rounded-full md:w-[400px] md:h-[400px] border-[2px]' />
    </div>
    </div>
    </div>
    <hr />
    </>

  )
}

export default Home
