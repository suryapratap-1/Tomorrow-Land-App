import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { CollectionCard } from './index'

const CardSwipTopBtn = ({scrollLeft, scrollRight, category, value, like}) => {

    return (
        <section className='md:pb-8'>
            <div className='flex justify-between items-center px-6 py-6 md:px-20 md:py-8'>
                <div className='flex flex-col gap-6'>
                    <h2 className='jewelery text-xl md:text-3xl'>{value.heading}</h2>
                    <>
                        {
                            value.text && <p className='primary-btn md:text-[0.98vw] pr-4'>{value.text}</p>
                        }
                    </>
                </div>
                <div className='hidden md:flex items-center'>
                    <button onClick={() => scrollLeft('.box')} 
                        className='flex justify-center items-center w-10'>
                        <AiOutlineLeft  fontSize={'1.8rem'} />
                    </button>
                    <button onClick={() => scrollRight('.box')}
                        className='flex justify-center items-center w-20'>
                        <AiOutlineRight  fontSize={'1.8rem'}/>
                    </button>
                </div>
            </div>
            <div className='box no-scrollbar pb-4 scroll-smooth flex gap-5 overflow-x-auto md:overflow-x-hidden'>
                {
                    category.map((item) => (
                        <CollectionCard key={item.id} like={like} item={item} />
                    ))
                }
            </div>
        </section>
    )
}

export default CardSwipTopBtn