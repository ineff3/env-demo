'use client';
import React from 'react'
import { FaEnvira } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import CustomBtn from './CustomBtn'
import { useState, useEffect } from 'react';


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        setScroll(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function handleNav() {
        setNav(!nav);
    }

    function handleLogin() {

    }

    return (
        <header className={!scroll ? 'sticky z-50 top-0 w-full duration-300 transition-shadow' : 'sticky z-50 top-0 w-full duration-300 transition-shadow border-b-[1px] border-gray-300 shadow-md backdrop-blur-lg bg-opacity-90 bg-white '}>
            <div className='  max-w-[1240px] mx-auto flex py-5 px-6 items-center '>
                <FaEnvira color='#9bceb9' size={'55px'} />
                <p className=' font-black text-2xl text-primary uppercase md:ml-3'>Env</p>
                <ul className=' hidden md:flex gap-4 sm:gap-6 md:gap-8 text-base font-bold uppercase flex-auto justify-end items-center'>
                    <li>Home</li>
                    <li>News</li>
                    <li>About</li>
                    <li>
                        <CustomBtn
                            title={"SIGN IN"}
                            componentStyles={"bg-black text-white max-w-[120px] py-2"}
                            handleClick={handleLogin}
                        />
                    </li>
                </ul>

                <div className='md:hidden flex flex-auto items-center justify-end'>
                    <div onClick={handleNav}>
                        {!nav ? <RxHamburgerMenu size={'35px'} /> : <AiOutlineClose size={'35px'} />}
                    </div>
                    <ul className={!nav ? 'fixed top-[-1000%]' : 'fixed sm:right-20 right-10 top-28 flex flex-col items-center gap-4 text-base font-bold uppercase transition-all duration-500 ease-in-out'}>
                        <li>Home</li>
                        <li>News</li>
                        <li>About</li>
                        <li>
                            <CustomBtn
                                title={"SIGN IN"}
                                componentStyles={"bg-black text-white max-w-[120px] py-2"}
                                handleClick={handleLogin}
                            />
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Navbar