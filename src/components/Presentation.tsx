import React from 'react'
import Demand from './Demand'

function Presentation() {
  return (
    <div className='bg-black text-white flex flex-col pb-[60px]'>
         <div className='flex flex-col text-center lg:hidden'>
            <span className="leading-[33px] md:leading-[60px] md:text-[71px] text-[30px] sm:text-[40px] font-lalezar">COMMUNICATION</span>
            <span className="leading-[33px] md:leading-[60px] md:text-[71px] text-[30px] sm:text-[40px] font-lalezar">AGENCY IN MOROCCO</span>
        </div>
        <div className='max-w-[1240px] mx-auto w-[90%] py-[30px] flex flex-col md:flex-row items-start justify-between gap-[60px]'>
            <div className="relative h-full flex flex-col md:max-w-[50%] md:min-w-[30%] max-w-full  md:items-start items-center text-center md:text-left text-white gap-y-[20px]">

                <div className='lg:flex flex-col text-left hidden'>
                    <span className="leading-[50px] text-[55px] font-lalezar">COMMUNICATION</span>
                    <span className="leading-[50px] text-[55px] font-lalezar">AGENCY IN MOROCCO</span>
                </div>

                <p className="md:text-[16px] text-[14px] font-Poppins">Our mission is to envision a dynamic graphic universe that tells a unique story: the story of your project.</p>
                <p className="md:text-[16px] text-[14px] font-Poppins">
                We support you in scripting your film to tell your story in the best possible way. We also handle art direction, voice-over, animation, and sound design.                </p>
                <Demand/>
            </div>
            <iframe className='md:flex-1 md:w-[640px] w-full h-[360px] flex items-start' src="https://player.vimeo.com/video/225766667?app_id=122963&h=122a93d690&referrer=https%3A%2F%2Fwww.oblivius.ma%2F" allow="autoplay; fullscreen"></iframe>
        </div>
    </div>
  )
}

export default Presentation