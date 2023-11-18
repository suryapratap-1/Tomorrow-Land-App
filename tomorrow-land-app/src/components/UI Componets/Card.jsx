import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiSolidHeart } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'


const Card = ({item, like}) => {
  const [liked, setLiked] = useState(false)
    console.log(item);
  return (
    <div className='text-black mb-4'>
        <NavLink>
            <div className='relative w-[22vw] flex flex-col gap-3 tracking-wider'>
                {
                    like && 
                    <div onClick={() => setLiked(!liked)} className='absolute right-3 top-3 hover:scale-110'>
                        {
                            liked ? <BiSolidHeart fontSize={"1.2rem"} /> : <FiHeart fontSize={"1.2rem"} />
                        }
                    </div>
                }

                <div className='overflow-hidden'>
                    <img src={item.frontImage} className='w-full h-[600px] object-cover hover:scale-105 transition-all duration-500' alt="front image" />
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-base'>
                        {item.title}
                    </h3>
                    <p className='whitespace-nowrap'>
                        {item.price}
                    </p>
                </div>
                <div className='flex flex-row gap-2'>
                    {
                        item.color.map((color, id) => (
                            <div key={id} className={`bg-[${color}] w-5 h-5 rounded-full`} />
                        ))
                    }
                </div>
                
            </div>
        </NavLink>
    </div>
  )
}

export default Card