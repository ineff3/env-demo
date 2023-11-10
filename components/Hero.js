'use client';
import React from 'react'
import CustomBtn from './CustomBtn'

const Hero = () => {
    function handleClick() {

    }

    return (
        <div className=' max-w-[800px] h-screen mx-auto text-center flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 px-3 sm:mt-[-90px] mt-[-220px] '>
            <p className='font-bold text-sm sm:text-lg md:text-xl  uppercase text-primary'>
                Discover environmental problems
            </p>
            <h1 className=' font-bold sm:text-5xl md:text-6xl text-4xl uppercase   '>
                Stay involved
            </h1>
            <p className=' font-bold sm:text-2xl md:text-3xl text-xl text-gray-600'>
                Receive data about pollution in your area
            </p>
            <CustomBtn
                title="Get Started"
                componentStyles={' bg-primary my-3'}
                handleClick={handleClick}
            />

        </div>
    )
}

export default Hero