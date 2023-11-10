import React from 'react'
import Image from 'next/image'

const Authorization = () => {
    return (
        <div className='w-full  bg-[url(/world-environment.webp)] bg-cover '>
            <div className='bg-primary bg-opacity-80 py-10 px-8'>
                <div className='max-w-[1240px] h-[92vh] lg:h-[50vh] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-5'>
                    <div className='relative grid'>
                        <Image
                            className=' '
                            src='/env.png'
                            alt='trees'
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className=' sm:px-5 lg:px-0' >
                        <p className=' text-2xl sm:text-3xl md:text-4xl'><b>Lorem ipsum dolor sit.</b></p>
                        <div className=' mt-6 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad error sapiente doloribus quaerat sunt totam est, soluta a. Assumenda, aliquam libero? Adipisci repellat dolor reiciendis vero minima architecto, facilis sint cupiditate?
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Authorization