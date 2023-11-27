import React from 'react'

const HomePageIntro = ({data}) => {
  return (
    <div className={`relative w-full h-[calc(100vh-15px)]`}>
        <img className='z-10 w-full h-full  object-cover'
          src={data.homeImage} alt="mens home image" 
        />
        <button className='primary-btn absolute z-20 bottom-16 left-20 border-b border-white pb-3 text-base font-bold text-white 
            tracking-wider hover:text-gray-300 hover:border-gray-300 '>
            {data.homeText}
        </button>
        <div className='absolute z-10 bottom-0 w-full h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent' />
    </div>
  )
}

export default HomePageIntro