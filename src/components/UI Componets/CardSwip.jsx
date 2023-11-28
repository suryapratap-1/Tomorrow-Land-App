import React from 'react'
import { ItemsCard } from './index'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const CardSwip = ({scrollLeft, scrollRight, category}) => {

    return (
        <section className='relative w-screen py-8 flex flex-row gap-5 bg-white '>
            <button onClick={() => scrollLeft('.mens-collection')} 
                className=' hidden md:flex absolute z-20 left-[2%] min-h-[70%] justify-center items-center w-20'>
                <AiOutlineLeft  fontSize={'1.8rem'} />
            </button>
            <button onClick={() => scrollRight('.mens-collection')}
                className=' hidden md:flex absolute z-20 right-[2%] min-h-[70%] justify-center items-center w-20'>
                <AiOutlineRight  fontSize={'1.8rem'}/>
            </button>

            <div className='mens-collection no-scrollbar scroll-smooth flex gap-2 min-[426px]:gap-5 overflow-x-auto md:overflow-x-hidden'>
                {
                    category.map((item) => (
                        <ItemsCard key={item.id} item={item} />
                    ))
                }
            </div>
        </section>
    )
}

export default CardSwip