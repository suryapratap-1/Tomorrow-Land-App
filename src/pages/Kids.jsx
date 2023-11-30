import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { GiSettingsKnobs } from 'react-icons/gi'
import { ProductCards } from '../components/UI Componets/index'
import { kidsItems } from '../data/Kids'

const Kids = () => {
  const [show, setShow] = useState(false)

  return (
    <main className='pt-20 px-4 md:px-16 text-black'>
      <header className='flex flex-col gap-6 py-2'>
          <NavLink to='/'>
            <div className='flex flex-row items-center gap-2'>
              <AiOutlineLeft fontSize='0.6rem' className=' cursor-pointer'/>
              <p>Home</p>
            </div>
          </NavLink>
          <h1 className='text-4xl text-left md:text-center'>KIDS</h1>
          <div className='flex flex-row justify-between'>
            <p>6 products</p>
            <div className='relative flex flex-row items-center gap-2'>
              <p>Sort by: </p>
              <button onClick={() => setShow(!show)}
                className='flex flex-row items-center gap-2'>
                <span className='text-gray-600'>Best selling</span>
                <BsChevronDown fontSize='o.8rem' className={`${show ? '-rotate-180' : 'rotate-0'} transition-all duration-300`} />
              </button>
              <div 
                className={`absolute z-20 top-7 right-0 w-32 h-36 bg-white border border-black overflow-y-auto ${show ? 'block' : 'hidden'}`}>
                <p className='px-4 hover:bg-gray-100 cursor-pointer'>Best selling</p>
                <p className='px-4 hover:bg-gray-100 cursor-pointer'>Price, low to high</p>
                <p className='px-4 hover:bg-gray-100 cursor-pointer'>Price, high to low</p>
                <p className='px-4 hover:bg-gray-100 cursor-pointer'>Date, old to new</p>
              </div>
            </div>
          </div>
      </header>

      <ProductCards products={kidsItems} like={true}/>

      <div className='relative'>
        <button className='relative left-1/2 -translate-x-1/2 flex flex-row gap-4 items-center my-7 px-10 py-5 bg-black 
          text-white border border-black hover:text-black hover:bg-white'>
          <GiSettingsKnobs className=' rotate-90' fontSize='1.2rem' color='white'/>
          <p>Select filters</p>
        </button>
      </div>
    </main>
  )
}

export default Kids