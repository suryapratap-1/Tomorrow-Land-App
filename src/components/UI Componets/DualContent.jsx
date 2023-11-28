import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const DualContent = ({ value }) => {
  return (
    <section className='flex flex-col md:flex-row md:h-[80vh]'>
            <div className='relative w-full h-[100vh] md:h-full md:w-1/2'>
              {
                value.text1 && 
                <h3 className='absolute bottom-[20%] left-1/2 -translate-x-1/2 z-20 text-3xl font-bold text-white whitespace-nowrap'>
                    {value.text1}
                </h3>
              }

              <img className='w-full h-full object-cover mix-blend-multiply' src={value.img1} alt="" />

              <button className='absolute z-20 bottom-[8%] left-1/2 -translate-x-1/2 flex flex-row gap-2 items-center text-white border
                border-white hover:bg-white hover:text-black transition-all ease-in-out px-8 md:px-10 py-3
              '>
                  <p className='shop-btn whitespace-nowrap tracking-widest'>{value.btn1}</p>
                  <AiOutlineRight className='text-white text-sm' />
              </button>

              <div className='absolute z-10 bottom-0 w-full h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent' />
            </div>

            <div className='relative w-full h-[100vh] md:h-full md:w-1/2'>
              {
                value.text2 && 
                <h3 className='absolute bottom-[20%] left-1/2 -translate-x-1/2 z-20 text-3xl font-bold text-white whitespace-nowrap'>
                    {value.text2}
                </h3>
              }
              
              {
                value.img2 && <img className='h-full w-full object-cover' src={value.img2} alt="" />
              }

              {
                value.video2 && 
                <video autoPlay loop muted
                    className='w-full h-full object-cover'>
                    <source src={value.video2} type="video/mp4"/>
                </video>
              }


              <button className='absolute z-20 bottom-[8%] left-1/2 -translate-x-1/2 flex flex-row gap-2 items-center text-white border 
                border-white hover:bg-white hover:text-black transition-all ease-in-out px-8 md:px-10 py-3
              '>
                  <p className='shop-btn whitespace-nowrap tracking-widest'>{value.btn2}</p>
                  <AiOutlineRight className='text-white text-sm' />
              </button>
              <div className='absolute z-10 bottom-0 w-full h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent' />
            </div>
    </section>
  )
}

export default DualContent