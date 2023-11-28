import React from 'react'
import { CollectionCard } from './index'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const DesriptionCardSwip = ({scrollLeft, scrollRight, category, value, like, id}) => {

    return (
        <section className='relative h-fit pb-8'>
            <div className='flex flex-col gap-5 px-4 py-4 md:px-16  md:py-8'>
                <h2 className='jewelery text-lg md:text-3xl'>{value.heading}</h2>
                {
                    value.text && <p className='max-[426px]:text-[0.9rem] min-[425px]:text-base'>{value.text}</p>
                }
            </div>
                <button onClick={() => scrollLeft(`.${id}`)} 
                    className='hidden md:flex absolute z-20 left-[2%] top-[60%] justify-center items-center w-20'>
                    <AiOutlineLeft  fontSize={'1.8rem'} />
                </button>
                <button onClick={() => scrollRight(`.${id}`)}
                    className='hidden md:flex absolute z-20 right-[2%] top-[60%] justify-center items-center w-20'>
                    <AiOutlineRight  fontSize={'1.8rem'} />
                </button>
            <div className={`${id} no-scrollbar scroll-smooth flex gap-5 overflow-x-auto md:overflow-x-hidden`}>
                <>
                    {
                        category.map((item, id) => (
                            <CollectionCard key={id} like={like} item={item}  />
                        ))
                    }
                </>
            </div>
        </section>
    )
}

export default DesriptionCardSwip