import React from 'react'
import Navbar from '../Navbar/page'
import Link from 'next/link'

const InstitutionPage = () => {
  return (
    <div>
        <Navbar />
        <div className='h-[80vh] mt-10'>
            <div className='text-center'>
                <h1 className='md:text-5xl text-2xl font-bold pb-10 pt-32'><span className='font-light'>Welcome </span> Institutes,</h1>
                <h1 className='md:text-5xl text-3xl font-semibold m-auto md:px-80 pb-10'>Partner with AudeZ for Academic Excellence</h1>
            </div>
            <div className='flex justify-center md:mb-2 mb-10'>
                <Link
                href="#"
                type="submit"
                className="bg-[#4F46E5] rounded-md bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[#1266F1]"
                data-twe-ripple-color="light">
                Register Here
                </Link>
            </div>
            <div className='pt-10 md:flex flex justify-around w-full'>
            <img className='rounded-md md:w-[30%] w-[40%]' src='data:image/jpeg;base64,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'/>
            <img className='rounded-md md:w-[30%] w-[40%]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtXBE-jzgeuPHbEEThhiMQTfbedSpMotyhEXPUQ5wN8qNbIM1FFsSpMQu7aJ5RY7P8gk&usqp=CAU'/>
            </div>
        </div>
        
    </div>
  )
}

export default InstitutionPage