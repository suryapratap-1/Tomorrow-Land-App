import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const ButtonUI = () => {
  return (
    <div className='px-20 pb-6'>
        <button className='bg-black flex flex-row gap-2 items-center text-white border border-white px-10 py-3 hover:bg-white 
            hover:border-black hover:text-black transition-all ease-in-out'>
            <p className='shop-btn tracking-widest'>DISCOVER MORE</p>
            <AiOutlineRight color={'white'}  fontSize={'0.8rem'} />
        </button>
    </div>
  )
}

export default ButtonUI