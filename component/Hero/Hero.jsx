import React from 'react'
import img from "../../../public/img.png"
import { FaPlay } from "react-icons/fa";

const Hero = () => {
    return (
        <header className='max-w-[132rem] !mx-auto !mt-10 
        !px-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
                <div className='flex flex-col justify-center py-14 md:py-0 !space-y-7'>
                    <h1 className='text-5xl font-bold leading-15'>Consistency with the focus gives you the <span className='text-[#ff0000]'>
                        confidence
                    </span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex gap-9'>
                        <button className='bg-black text-white px-6 py-3 rounded-xl'>Order Now</button>
                        <button><FaPlay />
                            Watch Now </button>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Hero