import React from 'react'
import { ItemsCard } from './index'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const CardSwip = ({scrollLeft, scrollRight, category}) => {
  return (
    <section className=' relative w-screen py-8 flex flex-row gap-5 bg-white '>
        <button onClick={() => scrollLeft('.mens-collection')} 
            className='absolute z-20 h-[80%] flex justify-center items-center w-20'>
            <AiOutlineLeft  fontSize={'1.8rem'} />
        </button>
        <button onClick={() => scrollRight('.mens-collection')}
            className='absolute z-20 left-[94%] h-[80%] flex justify-center items-center w-20'>
            <AiOutlineRight  fontSize={'1.8rem'}/>
        </button>

        <div className='mens-collection scroll-smooth flex gap-5 overflow-x-hidden'>
            {
                category.map((item) => (
                    <ItemsCard key={item.id} item={item} items={category}/>
                ))
            }
        </div>
    </section>
  )
}

export default CardSwip