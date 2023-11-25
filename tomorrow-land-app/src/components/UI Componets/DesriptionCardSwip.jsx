import React from 'react'
import { CollectionCard } from './index'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const DesriptionCardSwip = ({scrollLeft, scrollRight, category, value, like, id}) => {
    // console.log(category);

    return (
        <section className='pb-8'>
            <div className='flex flex-col gap-5 px-16 py-8'>
                <h2 className='jewelery text-3xl'>{value.heading}</h2>
                {
                    value.text && <p>{value.text}</p>
                }
            </div>
            <div className={`collection ${id} scroll-smooth flex gap-5 overflow-x-hidden`}>
                <button onClick={() => scrollLeft(`.${id}`)} 
                    className='absolute z-20 h-[80%] flex justify-center items-center w-20'>
                    <AiOutlineLeft  fontSize={'1.8rem'} />
                </button>
                <button onClick={() => scrollRight(`.${id}`)}
                    className='absolute z-20 left-[94%] h-[80%] flex justify-center items-center w-20'>
                    <AiOutlineRight  fontSize={'1.8rem'} />
                </button>
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