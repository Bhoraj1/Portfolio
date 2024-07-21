import axios from 'axios'
import React from 'react'
import { useForm} from "react-hook-form"
import toast from 'react-hot-toast'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add the reaet method from react-hot-form
  } = useForm()
  const onSubmit = async(data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    try {
       await axios.post("https://getform.io/f/amdpyklb",userInfo)
       toast.success("Your message has been sent successfully!")
       reset() // Clear the form after successful submission
    } catch (error) {
      toast.error("An error has occurred");
    }
  }

  return (
   <>
   <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mb-10">
      <div>
      <h1 className='text-lg font-bold'>Contact Me</h1>
      <p>Plese fill out the form below to contact me.</p>
      </div>
      <div className=' flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)}
        // action="https://getform.io/f/amdpyklb" method='post'
         className=' bg-slate-400 w-72 px-4 my-2 rounded-xl'>
        <h1 className='font-semibold text-2xl'>Message me</h1>
        <div>
        <label className='block'>Full Name</label>
        <input 
        {...register("name", { required: true })}
        className=' border p-1 mb-4 rounded-md w-64'
         type="text"
         id='name'
         name='name'
        placeholder='Enter yourn full Name' />
         {errors.name && <span>This field is required</span>}
        </div>
        <div>
        <label className='block'>Email</label>
        <input
         {...register("email", { required: true })}
        className='border p-1 mb-4 rounded-md w-64'
         type="text"
         id='email'
         name='email'
          placeholder='Enter yourn email' />
           {errors.email && <span>This field is required</span>}
        </div>
        <div>
        <label className='block'>Message</label>
        <textarea 
         {...register("message", { required: true })}
        className='border p-5 mb-4 rounded-md w-64'
         type="text"
         id='message'
         name='message'
        placeholder='Enter your email'
         />
          {errors.message && <span>This field is required</span>}
        </div>
        <div>
        <button type='submit'
         className='bg-black text-white rounded-xl
          mb-3 py-3 px-3 hover:bg-slate-700 duration-200'>Send</button>
        </div>
        </form>
      </div>

   </div>
   </>
  )
}

export default Contact
