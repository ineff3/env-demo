'use client';
import { AiOutlineUser, AiOutlineLock, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { useState } from 'react';
import { AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'

const socials =
    [
        <AiFillGoogleCircle size={35} color='#DB4437' />,
        <AiFillTwitterCircle size={35} color='#1DA1F2' />,
        <BiLogoFacebookCircle size={35} color='#4267B2' />
    ]

export default function CompleteLoginForm() {

    return (
        <Panel>
            <Container className="">
                <Title titleText={"Login"} />
                <LoginForm />
                <Socials socialsArray={socials} />
            </Container>
        </Panel>
    )
}

export function Panel({ children }) {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}
export function Container({ children }) {
    return (
        <div className="bg-white rounded-xl py-8 px-7 mx-auto w-96 mt-20 flex flex-col h-[500px] shadow-md">
            {children}
        </div>
    )
}
export function Title({ titleText }) {
    return <div className="font-bold font-sans text-3xl text-center  md:text-4xl  ">{titleText}</div>
}

export function LoginForm() {

    return (
        <div className="flex my-8 flex-col text-gray-500">
            <form className=' flex flex-col gap-7'>
                <FormInput field={"username"} icon={<AiOutlineUser size={20} />}
                    focusedIcon={<AiOutlineUser size={20} color='green' />} />
                <FormInput field={"password"} icon={<AiOutlineLock size={20} />}
                    focusedIcon={<AiOutlineLock size={20} color='green' />} />
                <LoginBtn handleClick={() => alert(1)}>Login</LoginBtn>

            </form>

        </div>
    )
}

function FormInput({ field, icon, focusedIcon }) {
    const value = `Type your ${field}`;
    let isFocused = false;
    let forgotPassword = <div className='absolute -bottom-6 right-0 text-xs'>Forgot password?</div>

    return (
        <div id='input-container' before={value}
            className=" flex min-h-[60px] rounded-md border-gray-300 border-2 px-2 focus-within:border-green-600 hover:focus-within:border-green-500  hover:border-gray-500 relative
             group">
            <div className='flex items-center'>
                {isFocused ? focusedIcon : icon}
            </div>
            <input type='text' required
                className=" w-full text-xl pl-2 focus:outline-none text-green-600 focus:text-green-600 z-50 bg-transparent myInput
                 " >
            </input>
            <div className='absolute mt-4 ml-7 text-mg block bg-white myInputLabel '>{value}</div>
            {field === 'password' ? forgotPassword : null}
        </div>
    )
}
function LoginBtn({ handleClick, children }) {
    return (
        <button onClick={handleClick}
            className=' w-full max-w-md  bg-green-500 shadow-lg rounded-3xl py-2 text-center text-white mt-7 hover:bg-green-600 active:bg-green-800'>{children}</button>
    )
}

export function Socials({ socialsArray }) {
    const [showSocials, setShowSocials] = useState(false);

    const handleShowSocialsClick = () => {
        setShowSocials(!showSocials);
    }

    const listItems = Array.from(socialsArray).map((icon, index) => {
        return <div key={index}>{icon}</div>
    });

    return (
        <div className='flex flex-col items-center justify-end grow '>
            <p className=' p-3 text-xs'>Or Sign Up Using</p>
            <div className=' pb-2 '>
                {showSocials ?
                    <AiOutlineArrowDown onClick={handleShowSocialsClick} size={20} /> : <AiOutlineArrowUp onClick={handleShowSocialsClick} size={20} />}
            </div>
            <div className={!showSocials ? ' flex gap-3 scale-100 transition-all duration-300 ease-in-out ' : 'flex gap-3 scale-0 transition-all duration-300 ease-in-out'} >{listItems}</div>
        </div>
    )
}

